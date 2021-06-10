import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const messageText = React.createRef();
  const dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                             avatar={dialog.avatar}
                                                                             id={dialog.id}
                                                                             key={dialog.id}/>);
  const messageElements = props.dialogsPage.messages.map(elem => <Message message={elem.message} key={elem.id}/>);

  const sendMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    let newMessageText = messageText.current.value;
    props.updateNewTextMessage(newMessageText);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <ul className={style.dialogsList}>
          {dialogElements}
        </ul>
      </div>
      <div className={style.messages}>
        <ul className={style.messagesList}>
          {messageElements}
        </ul>
      </div>
      <div className={style.form}>
        <textarea ref={messageText} onChange={onMessageChange} rows="5"
                  value={props.dialogsPage.newTextMessage}/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;

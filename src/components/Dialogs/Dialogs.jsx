import React from 'react';
import style from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  const dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                             avatar={dialog.avatar}
                                                                             id={dialog.id}
                                                                             key={dialog.id}/>);
  const messageElements = props.dialogsPage.messages.map(elem => <Message message={elem.message} key={elem.id}/>);

  const addMessage = (formObj) => {
    props.addMessage(formObj.newMessage);
  }

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
      <AddMessageForm onSubmit={addMessage} />
    </div>
  );
}

export default Dialogs;

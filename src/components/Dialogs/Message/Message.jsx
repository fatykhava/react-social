import React from 'react';
import style from '../Dialogs.module.scss';

const Message = (props) => {
  return (
    <li className={style.message}>{props.message}</li>
  );
}

export default Message;

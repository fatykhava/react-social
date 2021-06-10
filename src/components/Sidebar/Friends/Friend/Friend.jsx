import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
  return (
    <li className={style.item}>
      <div>
        <div className={`${style.wrImg} circle`}>
          <img src={props.avatar} alt="avatar"/>
        </div>
        <p>{props.name}</p>
      </div>
    </li>
  );
}

export default Friend;

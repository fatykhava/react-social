import React from 'react';
import style from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <li className={style.dialog}>
        <NavLink to={path} activeClassName={style.active}>
          <div className={style.wrImg}><img src={props.avatar} alt='avatar'/></div>
          {props.name}
        </NavLink>
    </li>
  );
}

export default DialogItem;

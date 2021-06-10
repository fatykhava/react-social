import React from 'react';
import style from './UserItem.module.css';
import img from '../../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
  return (
    <li className={style.user}>
      <div className={style.wrUser}>
        <NavLink to={'/profile/' + props.userId}>
          <div className={`${style.wrImg} circle`}>
            <img src={props.avatar ? props.avatar : img} alt="avatar pic"/>
          </div>
        </NavLink>
        {props.followed ?
          <button onClick={() => {props.unfollowUser(props.userId)}} className={style.followBtn}>Unfollow</button> :
          <button onClick={() => {props.followUser(props.userId)}} className={style.followBtn}>Follow</button>}
      </div>
      <div className={style.content}>
        <h4>{props.fullName}</h4>
        <h5>{props.country}, {props.city}</h5>
        <p>{props.status ? props.status : 'Status hasn\'t filled in yet'}</p>
      </div>
    </li>
  );
}

export default UserItem;

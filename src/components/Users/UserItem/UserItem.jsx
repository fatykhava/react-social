import React from 'react';
import style from './UserItem.module.css';
import img from '../../../assets/images/avatar.png';
import {NavLink} from 'react-router-dom';

const UserItem = ({user, ...props}) => {
  return (
    <li className={style.user}>
      <div className={style.wrUser}>
        <NavLink to={'/profile/' + user.id}>
          <div className={`${style.wrImg} circle`}>
            <img src={user.photos.small ? user.photos.small : img} alt='avatar pic'/>
          </div>
        </NavLink>
        {user.followed ?
          <button disabled={props.followingOnProgress.some(id => id === user.id)} onClick={() => {
            props.unfollowUser(user.id);
          }} className={style.followBtn}>Unfollow</button> :
          <button disabled={props.followingOnProgress.some(id => id === user.id)} onClick={() => {
            props.followUser(user.id);
          }} className={style.followBtn}>Follow</button>
        }
      </div>
      <div className={style.content}>
        <h4>{user.name}</h4>
        <h5>{'user.location.country'}, {'user.location.city'}</h5>
        <p>{user.status ? user.status : 'Status hasn\'t filled in yet'}</p>
      </div>
    </li>
  );
}

export default UserItem;

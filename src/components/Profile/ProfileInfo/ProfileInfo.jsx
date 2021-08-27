import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import img from '../../../assets/images/avatar.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }

  let contactsList = [];
  for (let key in props.profileInfo.contacts) {
    if (props.profileInfo.contacts[key]) {
      contactsList.push(<li key={key}>{key}: <a
        href={props.profileInfo.contacts[key]}>{props.profileInfo.contacts[key]}</a></li>);
    }
  }

  return (
    <div>
      <div className={style.wallpaper}>
        <img
          src='https://images.wallpaperscraft.ru/image/fon_nerovnosti_svet_86951_2048x1152.jpg'
          alt='wall-paper'/>
      </div>
      <div className={style.container}>
        <div className={style.avatar}>
          <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : img}
               alt='avatar'/>
        </div>
        <div className={style.info}>
          <h2>{props.profileInfo.fullName}</h2>
          <ProfileStatusWithHooks status={props.profileStatus} updateProfileStatus={props.updateProfileStatus}/>
          <p>About me: {props.profileInfo.aboutMe}</p>
          <p>{props.profileInfo.lookingForAJob ? ('Looking for a job: ' + props.profileInfo.lookingForAJobDescription) : ''}</p>
          <ul><b>Contacts:</b>
            {contactsList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

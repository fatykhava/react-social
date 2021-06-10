import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.wallpaper}>
        <img
          src='https://mlxwdkjh4idj.i.optimole.com/ga54j2s-Malm-74U/w:auto/h:auto/q:90/http://photosentinel.com/wp-content/uploads/2018/10/Splash1.jpg'
          alt='wall-paper'/>
      </div>
      <div className={style.container}>
        <div className={style.avatar}>
          <img src='https://i.pinimg.com/originals/0a/fa/14/0afa1463b60f64e5ef4318119b0c00b6.jpg'
               alt='avatar'/>
        </div>
        <div className={style.info}>
          <h2>Romana Lou</h2>
          <p>Date of Birth: 17.05.1993</p>
          <p>City: Los Angeles</p>
          <p>Education: University of Southern California</p>
          <p>Web Site: none</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

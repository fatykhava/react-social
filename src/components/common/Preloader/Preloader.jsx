import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import style from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={`${style.wrPreloader} wrImg`}>
      <img src={preloader} alt='Preloader'/>
    </div>
  )
}

export default Preloader;

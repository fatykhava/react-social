import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return <header className={style.header}>
    <div className={style.wrLogo}>
      <div className={style.logo}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UQgK0P4HGxmeyRjPLSOrUVYCUtWOePeRc7EHqpixK2Xbbc73iMGfADpG4OORX-A4GAk&usqp=CAU' alt='logo'/>
    </div>
      <span className={style.title}>React Social</span>
    </div>
    <div className={style.wrLogin}>
      <h2>
        {props.isAuth ?
          <div>
            <span>{props.login} - </span>
            <button className={style.logoutBtn} onClick={props.logout}>LogOut</button>
          </div> :
          <NavLink to={'/login'}>LogIn</NavLink>}
      </h2>
    </div>

  </header>;
}

export default Header;

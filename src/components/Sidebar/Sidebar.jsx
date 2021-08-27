import React from 'react';
import style from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <Navbar/>
      <FriendsContainer/>
    </div>
  );
}

export default Sidebar;

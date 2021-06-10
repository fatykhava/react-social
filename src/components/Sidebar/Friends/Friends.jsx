import React from 'react';
import style from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friends = props.friends.map(elem => <Friend name={elem.name}
                                                  avatar={elem.avatar}
                                                  id={elem.id}
                                                  key={elem.id}/>);

  return (
    <div>
      <h2>Friends</h2>
      <ul className={style.list}>
        {friends}
      </ul>
    </div>
  );
}

export default Friends;

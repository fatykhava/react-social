import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.wrPost}>
      <div className={style.post}>
        <div className={style.wrImg}><img src={props.avatar} alt="guest avatar"/></div>
        <p>{props.message}</p>
      </div>
      <span>like: {props.likesCount}</span>
    </div>
  );
}

export default Post;

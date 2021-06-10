import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postText = React.createRef();
  const postElements = props.posts.map(post => <Post message={post.message}
                                                     avatar={post.avatar}
                                                     likesCount={post.likesCount}
                                                     key={post.id}/>);

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let newPostText = postText.current.value;
    props.updateNewPostText(newPostText);
  };

  return (
    <div className={style.container}>
      <h2>My post</h2>
      <div className={style.form}>
        <textarea ref={postText} onChange={onPostChange} cols="50" rows="5" value={props.newPostText}/>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <h3>New post</h3>
      {postElements}
    </div>
  );
}

export default MyPosts;

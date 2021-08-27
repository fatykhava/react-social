import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import AddPostForm from "./AddPostForm";

const MyPosts = React.memo(props => {
  const postElements = props.posts.map(post => <Post message={post.message}
                                                     avatar={post.avatar}
                                                     likesCount={post.likesCount}
                                                     key={post.id}/>);

  const addPost = (formObj) => {
    props.addPost(formObj.newPost);
  }

  return (
    <div className={style.container}>
      <h2>My post</h2>
      <AddPostForm onSubmit={addPost}/>
      <h3>New post</h3>
      {postElements}
    </div>
  );
});

export default MyPosts;

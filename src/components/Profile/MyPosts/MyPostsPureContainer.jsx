import React from 'react';
import {addPost} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

class MyPostsContainer extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // } //по умолчанию есть в PureComponent

  render = () => {
    return (
      <MyPosts {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
}


export default connect(mapStateToProps, {addPost})(MyPostsContainer);

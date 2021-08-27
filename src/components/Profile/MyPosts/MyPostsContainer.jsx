import {addPost} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;

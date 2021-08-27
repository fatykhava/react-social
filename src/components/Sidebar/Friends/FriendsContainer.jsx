import Friends from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
    isAuth: state.auth.isAuth
  };
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;

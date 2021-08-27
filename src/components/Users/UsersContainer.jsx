import React from 'react';
import {connect} from 'react-redux';
import {followUser, requestUsers, unfollowUser} from '../../redux/reducers/usersReducer';
import Users from './Users';
import {
  getCurrentPage, getFollowingInProcess,
  getIsFetching,
  getPageSize, getPortionSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors/usersSelector";

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChange = (p) => {
    const {pageSize} = this.props;
    this.props.requestUsers(p, pageSize);
  }

  followUser = (userId) => {
    this.props.followUser(userId);
  }

  unfollowUser = (userId) => {
    this.props.unfollowUser(userId);
  }

  render = () => {
    return <Users {...this.props}
                  onPageChange={this.onPageChange}
                  followUser={this.followUser}
                  unfollowUser={this.unfollowUser}/>

  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    portionSize: getPortionSize(state),
    isFetching: getIsFetching(state),
    followingInProcess: getFollowingInProcess(state),
  };
}

export default connect(mapStateToProps,
  {followUser, unfollowUser, requestUsers})(UsersContainer);

import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, togglePreloader,
  unfollow
} from "../../redux/reducer/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.togglePreloader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
    this.props.togglePreloader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togglePreloader(false);
        this.props.setUsers(response.data.items);
      });
  }

  render = () => {
    return <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChange={this.onPageChange}
                  followUser={this.props.follow}
                  unfollowUser={this.props.unfollow}
                  isFetching={this.props.isFetching}/>

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching
  };
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, togglePreloader})(UsersContainer);


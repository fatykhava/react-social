import React from 'react';
import UserItem from './UserItem/UserItem';
import Preloader from '../common/Preloader/Preloader';
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
  const users = props.users.map((user) => <UserItem key={user.id}
                                                    user={user}
                                                    followUser={props.followUser}
                                                    unfollowUser={props.unfollowUser}
                                                    followingOnProgress={props.followingInProcess}
  />);

  return (
    <div>
      <h1>Users</h1>
      {props.isFetching ? <Preloader/> : null}
      <Paginator currentPage={props.currentPage} pageSize={props.pageSize}  portionSize={props.portionSize}
                 totalItemsCount={props.totalUsersCount} onBtnClick={props.onPageChange}/>
      <ul>
        {users}
      </ul>
    </div>
  );
}

export default Users;

import React from 'react';
import style from './Users.module.css';
import UserItem from './UserItem/UserItem';
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {
  const users = props.users.map((user) => <UserItem key={user.id}
                                                    userId={user.id}
                                                    fullName={user.name}
                                                    status={user.status}
                                                    country={'user.location.country'}
                                                    city={'user.location.city'}
                                                    avatar={user.photos.small}
                                                    followed={user.followed}
                                                    followUser={props.followUser}
                                                    unfollowUser={props.unfollowUser}
  />);

  const getPageButton = (pageCount, currentPage) => {
    let pageButtons = [];

    const buttonPushFunc = (i, arr) => {
      let pageButtons = [...arr];
      pageButtons.push(<span key={`btn-${i}`}
                             className={`${i === currentPage && style.active} ${style.pageButtons}`}
                             onClick={(e) => {
                               props.onPageChange(i)
                             }}>{i}</span>);
      return pageButtons;
    }

    if (currentPage < 10) {
      for (let i = 1; i < 11; i++) {
        pageButtons = buttonPushFunc(i, pageButtons);
      }
      pageButtons.push(<span key={`btn-11`}>...</span>)
    } else if (pageCount - currentPage < 10) {
      pageButtons.push(<span key={`btn-${pageCount - 10}`}>...</span>)
      for (let i = pageCount - 10; i <= pageCount; i++) {
        pageButtons = buttonPushFunc(i, pageButtons);
      }
    } else {
      pageButtons.push(<span key={`btn-${currentPage - 5}`}>...</span>)
      for (let i = currentPage - 4; i <= currentPage + 4; i++) {
        pageButtons = buttonPushFunc(i, pageButtons);
      }
      pageButtons.push(<span key={`btn-${currentPage + 5}`}>...</span>)
    }

    return pageButtons;
  };

  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pageButtons = getPageButton(pageCount, props.currentPage);

  return (
    <div>
      <h1>Users</h1>
      {props.isFetching ? <Preloader/> : null}
      <div className={style.container}>
        {pageButtons}
      </div>
      <ul>
        {users}
      </ul>
    </div>
  );
}

export default Users;

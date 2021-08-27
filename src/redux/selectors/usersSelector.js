import {createSelector} from "reselect";

const getUsersUtil = (state) => state.usersPage.users;

//пример применения Reselect, просто чтобы не забыть
export const getUsers = createSelector(getUsersUtil, users => users.filter(user => true));

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getPortionSize = (state) => state.usersPage.portionSize;
export const getIsFetching= (state) => state.usersPage.isFetching;
export const getFollowingInProcess = (state) => state.usersPage.followingInProcess;

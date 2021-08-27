import UsersAPI from '../../api/api';
import updateObjectInArray from "../../utils/objectHelpers";

const FOLLOW_USER = 'users/FOLLOW-USER';
const UNFOLLOW_USER = 'users/UNFOLLOW-USER';
const SET_USERS = 'users/SET-USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const TOGGLE_PRELOADER = 'users/TOGGLE-PRELOADER';
const TOGGLE_FOLLOWING_PROCESS = 'users/TOGGLE-FOLLOWING-PROCESS';

const followSuccess = (userId) => ({type: FOLLOW_USER, userId});
const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(togglePreloader(true));
  dispatch(setCurrentPage(currentPage));

  let response = await UsersAPI.getUsers(currentPage, pageSize);

  dispatch(togglePreloader(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, actionCreator, apiMethod) => {
  dispatch(toggleFollowingProcess(true, userId));
  let response = await apiMethod(userId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(toggleFollowingProcess(false, userId));
}

export const followUser = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, followSuccess, UsersAPI.followUser.bind(UsersAPI));
}

export const unfollowUser = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, unfollowSuccess, UsersAPI.unfollowUser.bind(UsersAPI));
}

let initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  portionSize: 10,
  isFetching: true,
  followingInProcess: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
      }

    case SET_USERS:
      return {
        ...state, users: [...action.users]
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.totalUsersCount
      }

    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }

    case TOGGLE_PRELOADER:
      return {
        ...state, isFetching: action.isFetching
      }

    case TOGGLE_FOLLOWING_PROCESS: {
      return {
        ...state,
        followingInProcess: action.isFetching ?
          [...state.followingInProcess, action.userId] :
          state.followingInProcess.filter(id => id !== action.userId)
      }
    }

    default:
      return state;
  }
}

export default userReducer;

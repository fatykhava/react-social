const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';

export const follow = (userId) => ({type: FOLLOW_USER, userId});
export const unfollow = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});

let initialState = {
  users : [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: true,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
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

    default:
      return state;
  }
}

export default userReducer;

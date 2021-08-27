import {ProfileAPI} from '../../api/api';

const ADD_POST = 'profile/ADD-POST';
const TOGGLE_PRELOADER = 'profile/TOGGLE-PRELOADER';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';

export const addPost = (newPost) => ({type: ADD_POST, newPost});
const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo});
const setUserStatus = (newStatus) => ({type: SET_USER_STATUS, newStatus});

export const getProfileInfo = (userId) => async (dispatch) => {
  dispatch(togglePreloader(true));

  const response = await ProfileAPI.getProfileInfo(userId);

  dispatch(togglePreloader(false));
  dispatch(setUserProfile(response));
}

export const getProfileStatus = (userId) => async (dispatch) => {
  const response = await ProfileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
}

export const updateProfileStatus = (status) => async (dispatch) => {
  const response = await ProfileAPI.updateStatus(status)

  if (response.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

let initialState = {
  profileInfo: null,
  profileStatus: 'Type your status',
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      avatar: 'https://i.ytimg.com/vi/XM4vQGcKEEo/maxresdefault.jpg',
      likesCount: 5
    },
    {
      id: 2,
      message: 'It\'s my first post',
      avatar: 'https://i.insider.com/5d35bf63454a3947b349c915?width=1136&format=jpeg',
      likesCount: 23
    }
  ],
  isFetching: true,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: action.newPost,
        avatar: 'https://i.ytimg.com/vi/XM4vQGcKEEo/maxresdefault.jpg',
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileInfo: action.profileInfo
      };
    case SET_USER_STATUS:
      return {
        ...state,
        profileStatus: action.newStatus ? action.newStatus : 'Type your status'
      };
    default:
      return state;
  }
}

export default profileReducer;

import {AuthAPI} from '../../api/api';
import {stopSubmit} from "redux-form";

const AUTH_USER = 'auth/AUTH-USER';
const TOGGLE_PRELOADER = 'auth/TOGGLE-PRELOADER';

export const authUser = (id, email, login, isAuth) => ({type: AUTH_USER, payload: {id, email, login, isAuth}});
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});

export const authMe = () => async (dispatch) => {
  dispatch(togglePreloader(true));

  const response = await AuthAPI.me();

  if (response.resultCode === 0) {
    dispatch(togglePreloader(false));
    dispatch(authUser(response.data.id, response.data.email, response.data.login, true));
  }
}

export const login = (email, password, rememberMe = false, captcha = true) => async (dispatch) => {
  const response = await AuthAPI.logIn(email, password, rememberMe, captcha);

  if (response.resultCode === 0) {
    dispatch(authMe());
  } else {
    let errorMessage = response.messages.length > 0 ? response.messages[0] : 'Error';
    dispatch(stopSubmit('login', {_error: errorMessage}));
  }
}

export const logout = () => async (dispatch) => {
  const response = await AuthAPI.logOut();

  if (response.resultCode === 0) {
    dispatch(authUser(null, null, null, false));
  }
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}

export default authReducer;

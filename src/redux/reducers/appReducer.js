import {authMe} from "./authReducer";

const SET_INIT = 'app/SET-INIT';

export const setInit = () => ({type: SET_INIT});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(authMe());
  promise.then(() => {
    dispatch(setInit());
  })
}

let initialState = {
  isInit: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        isInit: true
      };
    default:
      return state;
  }
}

export default appReducer;

import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";
const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  isOpenNavbar: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return { ...state, isOpenNavbar: action.openStatus };
    case SET_USER_DATA:
      return {
        ...state,
        id: action.id,
        login: action.login,
        email: action.email,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const isOpenNavbarAC = (openStatus) => ({type: TOGGLE_NAVBAR, openStatus});
export const setUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, email, id, login, isAuth});

export const authMe = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { email, id, login } = response.data.data;
      dispatch(setUserData(email, id, login, true));
    }
  });
};

export const login = (login, password, rememberMe) => (dispatch) => {
   
   authAPI.login(login, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMe())
    }
    else{
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit("login", {_error: message}));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default socialReducer;
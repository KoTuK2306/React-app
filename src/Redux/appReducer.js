/* import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form"; */
import { authMe } from "./socialReducer";
/* const SET_USER_DATA = "SET_USER_DATA"; */
const INITIALIZED_SUCCES = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSucces = () => ({ type: INITIALIZED_SUCCES });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

/* export const login = (login, password, rememberMe) => (dispatch) => {
   
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

/* export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
}; */

export default appReducer;

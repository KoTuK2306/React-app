import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profileReducer.js";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import socialReducer from "./socialReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer.js";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  forAllPage: socialReducer,
  app: appReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

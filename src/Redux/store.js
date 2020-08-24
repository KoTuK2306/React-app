import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profileReducer.js";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import socialReducer from "./socialReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  forAllPage: socialReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

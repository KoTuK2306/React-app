import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer.js';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import socialReducer from './socialReducer';

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    forAllPage: socialReducer
});

let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
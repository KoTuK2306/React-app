import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import socialReducer from './socialReducer';

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    forAllPage: socialReducer
});

let store = createStore(reducers);

export default store;
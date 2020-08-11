import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';


let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer
});


let store = createStore(reducers);

export default store;
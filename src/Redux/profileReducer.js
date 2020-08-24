import { authAPI } from '../components/api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        postData: [
        {id: 1, likesCount: 23, message: 'My second post'},
        {id: 2, likesCount: 4, message: 'Beatiful day'},
        {id: 3, likesCount: 68, message: 'You\'re beatiful'}
        ],
        newPostText: '',
        profile: null
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 4, message: state.newPostText, likesCount: 0}]
            }

        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE: 
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;           
    }
}

export const addPost = () =>({type: ADD_POST});
export const updateNewPostText = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) =>{
    authAPI.me(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      });
}
export default profileReducer;
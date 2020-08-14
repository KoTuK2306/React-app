const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postData: [
        {id: 1, likesCount: 23, message: 'My second post'},
        {id: 2, likesCount: 4, message: 'Beatiful day'},
        {id: 2, likesCount: 68, message: 'You\'re beatiful'}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case addPost:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.newPostText = '';
            state.postData.push(newPost);
            return state;
        case updateNewPostText: 
            state.newPostText = action.newText;
            return state;
        default:
            return state;           
    }
}

export const addPostActionCreator = () =>({type: addPost})
export const updateNewPostTextActionCreator = (postText) => ({type: 'UPDATE-NEW-POST-TEXT', newText: postText})

export default profileReducer;
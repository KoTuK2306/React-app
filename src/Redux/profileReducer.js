const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postData: [
        {id: 1, likesCount: 23, message: 'My second post'},
        {id: 2, likesCount: 4, message: 'Beatiful day'},
        {id: 3, likesCount: 68, message: 'You\'re beatiful'}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case addPost:{
            let newPost = 
                {id: 4,
                message: state.newPostText,
                likesCount: 0}
            
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewPostText:{ 
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;           
    }
}

export const addPostActionCreator = () =>({type: addPost})
export const updateNewPostTextActionCreator = (postText) => ({type: 'UPDATE-NEW-POST-TEXT', newText: postText})

export default profileReducer;
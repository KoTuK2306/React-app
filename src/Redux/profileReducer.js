const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) =>{
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

export default profileReducer;
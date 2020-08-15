import {connect} from 'react-redux';
import MyPosts from './my-posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../Redux/profileReducer';
import store from '../../../Redux/reduxStore';


const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        state: store.getState,
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () =>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);    
      
export default MyPostsContainer;
import {connect} from 'react-redux';
import MyPosts from './my-posts';
import {addPost, updateNewPostText} from '../../../Redux/profileReducer.js';
import store from '../../../Redux/store';


const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        state: store.getState,
        postData: state.profilePage.postData
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);    
      
export default MyPostsContainer;
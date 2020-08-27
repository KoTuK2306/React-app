import {connect} from 'react-redux';
import MyPosts from './my-posts';
import { addPost } from '../../../Redux/profileReducer.js';


const mapStateToProps = (state) => {
    return{
        postData: state.profilePage.postData
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);    
      
export default MyPostsContainer;
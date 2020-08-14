import React from 'react';
import MyPosts from './my-posts';
import StoreContext from '../../../storeContext';
import Post from './../Post/post';

const MyPostsContainer = (props) =>{
    return(
        <StoreContext.Consumer>
            {(store) => {
                const post = store.getState().profilePage.postData.map(postData =>
                    <Post likesCount = {postData.likesCount} message = {postData.message}/>);
                let addPost = () =>{
                    const action = {type: 'ADD-POST'};
                    store.dispatch(action);
                }
                let onPostChange = (postText) =>{
                    const action = {type: 'UPDATE-NEW-POST-TEXT', newText: postText};
                    store.dispatch(action);
                }
                return(
                    <div>
                        <MyPosts updateNewPostText = {onPostChange}
                             addPost = {addPost}
                             newPostText = {store.getState().profilePage.newPostText}/>
                        {post}
                    </div>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
            
export default MyPostsContainer;
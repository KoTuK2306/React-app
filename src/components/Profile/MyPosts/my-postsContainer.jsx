import React from 'react';
import MyPosts from './my-posts';

const MyPostsContainer = (props) =>{
    let addPost = () =>{
        const action = {type: 'ADD-POST'};
        props.store.dispatch(action);
    }
    let onPostChange = (postText) =>{
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: postText};
        props.store.dispatch(action);
    }
    return(
        <MyPosts updateNewPostText = {onPostChange} addPost = {addPost} newPostText = {props.store.getState().profilePage.newPostText}/>
    );
}

export default MyPostsContainer;
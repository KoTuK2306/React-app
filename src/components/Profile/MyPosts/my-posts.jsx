import React from 'react';
import classes from './myPosts.module.css';
import Post from './../Post/post'

const MyPosts = (props) =>{ 
    const post = props.store.getState().profilePage.postData.map(postData =>
        <Post likesCount = {postData.likesCount} message = {postData.message}/>); 
    const newPostElement = React.createRef(); 
    const onAddPost = () =>{
        props.addPost();
        
    }
    const onPostChange = (e) =>{
        const postText = newPostElement.current.value;
        props.updateNewPostText(postText);
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';  
    }
    return(
        <div>
            <div className = {classes.myPosts}>
                <textarea 
                ref = {newPostElement}
                onChange = {onPostChange}
                value = {props.newPostText}
                className = {classes.input} 
                maxLength = '500'/>
                <div onClick = {onAddPost} className = {classes.button}>Add post</div>
            </div>
            <div>
                {post}     
            </div>  
        </div>
    );
}

export default MyPosts;
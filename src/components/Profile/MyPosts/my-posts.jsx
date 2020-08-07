import React, {useState} from 'react';
import classes from './myPosts.module.css';

const MyPosts = (props) =>{
    const newPostElement = React.createRef();    

    const addPost = () =>{
/*         const postText = newPostElement.current.value; */
        props.addPost();
/*         props.updateNewPostText(''); */
    }

    const onPostChange = () =>{
        const postText = newPostElement.current.value;
        props.updateNewPostText(postText);
    }

    return(
        <div className = {classes.myPosts}>
            <textarea 
            ref = {newPostElement}
            onChange = {onPostChange}
            value = {props.newPostText}
            className = {classes.input} 
            maxLength = '500'/>
            <div onClick = {addPost} className = {classes.button}>Add post</div>
        </div>
    );
}

export default MyPosts;
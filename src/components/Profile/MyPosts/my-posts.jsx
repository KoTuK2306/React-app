import React from 'react';
import classes from './myPosts.module.css';

const MyPosts = (props) =>{
    const newPostElement = React.createRef();    

    const addPost = () =>{
        const action = {type: 'ADD-POST'};
        props.dispatch(action);
    }

    const onPostChange = ({target}) =>{
        const postText = newPostElement.current.value;
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: postText};
        props.dispatch(action);
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
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
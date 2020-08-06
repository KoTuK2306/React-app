import React, {useState} from 'react';
import classes from './myPosts.module.css';

const MyPosts = (props) =>{
    const [value, setValue] = useState("")
    const onChange = (inputValue) => {
        setValue(inputValue)
    }
    const newPostElement = React.createRef();    
    const addPost = () =>{
        const postText = newPostElement.current.value;
        props.addPost(postText);
        setValue('');
    }

    return(
        <div className = {classes.myPosts}>
            <input 
            type = "text"
            ref = {newPostElement}
            name = "text"
            value={value}
            placeholder = "Enter your post"
            onChange = {(event) => onChange(event.target.value)}
            className = {classes.input} />
            <div onClick = {addPost} className = {classes.button}>Add post</div>
        </div>
    );
}

export default MyPosts;
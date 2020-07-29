import React, {useState} from 'react';
import classes from './my-posts.module.css';

const MyPosts = () =>{
    const [value, setValue] = useState("")
    const onChange = (inputValue) => {
        setValue(inputValue)
    }
    return(
        <div className = {classes.myPosts}>
            <input 
            type="text"
            id="text"
            name="text"
            value={value}
            placeholder="Enter your post"
            onChange = {(event) => onChange(event.target.value)}
            className = {classes.input} />
            <div className = {classes.button}>Add post</div>
        </div>
    );
}

export default MyPosts;
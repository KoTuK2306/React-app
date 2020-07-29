import React from 'react';
import './my-posts.css';

const MyPosts = () =>{
    return(
        <div className = 'my-posts'>
            <input type="text" id="text" name="text" value="Enter your post" className = 'input' />
            <div className = 'button'>Add post</div>
        </div>
    );
}

export default MyPosts;
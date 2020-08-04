import React from 'react';
import classes from './post.module.css';
import Like from './../../Profile/Post/Like/like'

const Post = ({message, likesCount}) =>{
    return(
        <div className = {classes.posts}>
            <div className = {classes.postContent}> 
                <img src = 'https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375'/>
                <div className = {classes.newPost}>
                    {message} 
                </div> 
            </div>
            <Like likesCount = {likesCount}/>   
        </div>
    );
}

export default Post;
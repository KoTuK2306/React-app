import React from 'react';
import classes from './newPost.module.css';

const NewPost = (props) =>{
    return(
        <div className = {classes.posts}>
            <img src = 'https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375'/>
            <div className = {classes.newPost}>
                {props.message}
            </div>
        </div>
    );
}

export default NewPost;
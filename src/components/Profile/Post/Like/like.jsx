import React from 'react';
import classes from './like.module.css'

const Like = (props) => {
    return(
        <div className = {classes.like}>
                <img className = {classes.likeItem}
                src = 'https://visualpharm.com/assets/783/Facebook%20Like-595b40b65ba036ed117d1f0f.svg' alt = ''/>
                {props.likesCount}
        </div>
    );
}

export default Like;
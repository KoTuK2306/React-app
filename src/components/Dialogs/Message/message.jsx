import React from 'react';
import classes from './message.module.css';

const Message = ({message, me}) =>{
    return(
        <div className = {`${classes.message} ${me ? classes.me : ''}`}>
            {message} 
        </div>
    );
}

export default Message;
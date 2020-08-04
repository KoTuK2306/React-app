import React from 'react';
import classes from './message.module.css';

const Message = ({message}) =>{
    return(
        <div className = {classes.message}>
            {message}
        </div>
    );
}

export default Message;
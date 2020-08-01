import React from 'react';
import classes from './messages.module.css';
import Message from './../Messages/Message/message';    
    
    const Messages = () =>{
        return(
            <div className = {classes.messages}>
                <Message message = 'Hi!'/>
                <Message message = 'What do you think about a weather today?'/>
                <Message message = 'Oh, this is bullshit'/>
            </div>
        );
    }

    export  default Messages;
    
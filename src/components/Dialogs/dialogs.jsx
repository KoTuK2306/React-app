import React from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import classes from './dialogs.module.css';
import Line from './Line/line';
import Dialog from './Dialog/dialog';
import Message from './Message/message';

const Dialogs = (props) =>{

    const dialogs = props.state.dialogsData
    .map(dialog => <Dialog userName = {dialog.userName} id = {dialog.id}/>);

    const messages = props.state.messagesData
    .map (message => <Message message = {message.message}/>)

    

        return(
            <BrowserRouter>
                <div className = {classes.dialogs}>
                    <div className = {classes.dialogsItems}>
                        {dialogs}                   
                    </div>
                    <Line />
                    <div className = {classes.messages}>
                        {messages}
                    </div>
                </div>
            </BrowserRouter>
        );
}

export default Dialogs;
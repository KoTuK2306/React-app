import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import classes from './dialogs.module.css';
import Line from './Line/line';
import Dialog from './Dialog/dialog';
import Message from './Message/message';

const Dialogs = (props) =>{

    let state = props.messagesPage;

    const dialogs = state.dialogsData
    .map(dialog => <Dialog userName = {dialog.userName} id = {dialog.id}/>);
    const messages = state.messagesData
    .map (message => <Message me = {message.author === 'dmitriy2306' ? true : false} message = {message.message}/>)

    let newMessageText = state.newMessageText;
    

    const onSendMessageClick = () =>{
        props.sendMessage();
    }

    const onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.messageChange(body);

    }

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
                <div className = {classes.inputArea}>
                    <textarea value = {newMessageText}
                    className = {classes.textarea}
                    onChange = {onNewMessageChange}/>
                    <div onClick = {onSendMessageClick} className = {classes.button}>Send</div>
                </div>
                
            </BrowserRouter>
        );
}

export default Dialogs;
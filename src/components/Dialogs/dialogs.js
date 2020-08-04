import React from 'react';
import classes from './dialogs.module.css';
import Line from './Line/line';
import Dialog from './../Dialogs/Dialog/dialog';
import Message from './../Dialogs/Message/message';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';

const Dialogs = (props) =>{
    
    const dialogsData = [
        {id: 1, userName: 'Dmitriy'},
        {id: 2, userName: 'Nikolay'},
        {id: 3, userName: 'Alexey'},
        {id: 4, userName: 'Pavel'},
        {id: 5, userName: 'Alex'},
        {id: 6, userName: 'Andrey'},
        {id: 7, userName: 'Anton'},
        {id: 8, userName: 'Artem'},
        {id: 9, userName: 'Artur'},
        {id: 10, userName: 'Boris'},
        {id: 11, userName: 'Evgeniy'}
    ]

    const messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What do you think about a weather today?'},
        {id: 3, message: 'Oh, this is bullshit'},
    ]

const dialogs = dialogsData
.map(dialog => <Dialog userName = {dialog.userName} id = {dialog.id}/>);

const messages = messagesData
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
import React from 'react';
import classes from './dialogs.module.css';
import Line from './../Dialogs/Line/line';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';

const Dialog = ({userName, id}) =>{
    const path = '/dialogs/' + id;
    return(
            <div className = {classes.dialog}>
                <NavLink className = {classes.dialogItem} to = {path} activeClassName = {classes.active2}>{userName}</NavLink>
            </div> 
    );
}

const Message = ({message}) =>{
    return(
        <div className = {classes.message}>
            {message}
        </div>
    );
}

const Dialogs = (props) =>{
    return(

        <BrowserRouter>
            <div className = {classes.dialogs}>
                <div className = {classes.dialogsItems}>
                    
                    <Dialog userName = 'Dmitriy'id = '1'/>
                    <Dialog userName = 'Nikolay'id = '2'/>
                    <Dialog userName = 'Alexey'id = '3'/>
                    <Dialog userName = 'Pavel'id = '4'/>
                    <Dialog userName = 'Alex'id = '5'/>
                    <Dialog userName = 'Andrey'id = '6'/>
                    <Dialog userName = 'Anton'id = '7'/>
                    <Dialog userName = 'Artem'id = '8'/>
                    <Dialog userName = 'Artur'id = '9'/>
                    <Dialog userName = 'Boris'id = '10'/>
                          
                </div>
                <Line />
                <div className = {classes.messages}>

                    <Message message = 'Hi!'/>
                    <Message message = 'What do you think about a weather today?'/>
                    <Message message = 'Oh, this is bullshit'/>         

                </div>

            </div>
        </BrowserRouter>
    );
}

export default Dialogs;
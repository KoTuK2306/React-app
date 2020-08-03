import React from 'react';
import classes from './dialogs.module.css';
import Line from './Line/line';
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
    
    const dialogData = [
        {id: 1, userName: 'Dmitriy'},
        {id: 2, userName: 'Nikolay'},
        {id: 3, userName: 'Alexey'},
        {id: 4, userName: 'Pavel'},
        {id: 5, userName: 'Alex'},
        {id: 6, userName: 'Andrey'},
        {id: 7, userName: 'Anton'},
        {id: 8, userName: 'Artem'},
        {id: 9, userName: 'Artur'},
        {id: 10, userName: 'Boris'}
    ]

    const messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What do you think about a weather today?'},
        {id: 3, message: 'Oh, this is bullshit'},
    ]

    return(

        <BrowserRouter>
            <div className = {classes.dialogs}>
                <div className = {classes.dialogsItems}>
                    
                    <Dialog userName = {dialogData[0].userName} id = {dialogData[0].id}/>
                    <Dialog userName = {dialogData[1].userName} id = {dialogData[1].id}/>
                    <Dialog userName = {dialogData[2].userName} id = {dialogData[2].id}/>
                    <Dialog userName = {dialogData[3].userName} id = {dialogData[3].id}/>
                    <Dialog userName = {dialogData[4].userName} id = {dialogData[4].id}/>
                    <Dialog userName = {dialogData[5].userName} id = {dialogData[5].id}/>
                    <Dialog userName = {dialogData[6].userName} id = {dialogData[6].id}/>
                    <Dialog userName = {dialogData[7].userName} id = {dialogData[7].id}/>
                    <Dialog userName = {dialogData[8].userName} id = {dialogData[8].id}/>
                    <Dialog userName = {dialogData[9].userName} id = {dialogData[9].id}/>
                          
                </div>
                <Line />
                <div className = {classes.messages}>

                    <Message message = {messagesData[0].message}/>
                    <Message message = {messagesData[1].message}/>
                    <Message message = {messagesData[2].message}/>         

                </div>

            </div>
        </BrowserRouter>
    );
}

export default Dialogs;
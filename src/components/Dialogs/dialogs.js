import React from 'react';
import classes from './dialogs.module.css';
import Dialog from './Dialog/dialog';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import Messages from './../Dialogs/Messages/messages'

const Dialogs = (props) =>{
    return(

        <BrowserRouter>
            <div className = {classes.dialogs}>
                <div className = {classes.dialogsItems}>
                    
                    <NavLink to = '/dialogs/1' activeClassName = {classes.active2}> <Dialog userName = 'Dmitriy'/> </NavLink>
                    <NavLink to = '/dialogs/2' activeClassName = {classes.active2}> <Dialog userName = 'Nikolay'/> </NavLink>
                    <NavLink to = '/dialogs/3' activeClassName = {classes.active2}> <Dialog userName = 'Alexey'/> </NavLink>
                    <NavLink to = '/dialogs/4' activeClassName = {classes.active2}> <Dialog userName = 'Pavel'/> </NavLink>
                          
                </div>

                <div className = {classes.line}>
                    <span className={classes.sexy_line1}></span>
                    <span className={classes.sexy_line2}></span>
                </div>  

                <div className = {classes.messages}>

                <Route path = '/dialogs/1'component = {Messages}/>
                               

                </div>

            </div>
        </BrowserRouter>
    );
}

export default Dialogs;
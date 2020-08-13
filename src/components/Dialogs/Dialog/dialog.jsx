import React from 'react';
import { NavLink} from 'react-router-dom';
import classes from './dialog.module.css';

const Dialog = ({userName, id}) =>{
    const path = '/dialogs/' + id;
    return(
            <div className = {classes.dialog}>
                <NavLink className = {classes.dialogItem} to = {path} activeClassName = {classes.active2}>{userName}</NavLink>
            </div> 
    );
}

export default Dialog;
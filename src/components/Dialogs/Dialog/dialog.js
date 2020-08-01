import React from 'react';
import classes from './dialog.module.css';

const Dialog = ({userName}) =>{
    return(
        <div className = {classes.dialog}>
         {userName}
        </div>  
    );
}

export default Dialog;
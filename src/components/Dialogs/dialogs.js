import React from 'react';
import classes from './dialogs.module.css';

const Dialogs = (props) =>{
    return(
        <div className = {classes.dialogs}>
            
            <div className = {classes.dialogsItems}>

                <div className = {classes.dialogsItem + ' ' + classes.active}>
                    Zhopa
                    
                </div>
                <div className = {classes.dialogsItem}>
                    Zhopa
                </div>
                <div className = {classes.dialogsItem}>
                    Zhopa
                </div>
                <div className = {classes.dialogsItem}>
                    Zhopa
                </div>
                
                
                
            </div>
            <div className = {classes.line}>
                <span className={classes.sexy_line1}></span>
                <span className={classes.sexy_line2}></span>
            </div>  

            <div className = {classes.messages}>
                

                <div className = {classes.message}>Hi</div>
                <div className = {classes.message}>Bye</div>
                <div className = {classes.message}>Have a good day!</div>

            </div>

        </div>
    );
}

export default Dialogs;
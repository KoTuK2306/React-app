import React from 'react';
import classes from './dialogs.module.css';
import Dialog from './Dialog/dialog';
import Message from './Message/message';

const Dialogs = (props) =>{
    return(
        <div className = {classes.dialogs}>
            
            <div className = {classes.dialogsItems}>

                <div className = {classes.dialogsItem + ' ' + classes.active}>
                    Zhopa
                    
                </div>
                
                <Dialog userName = 'Dmitriy'/>
                <Dialog userName = 'Nikolay'/>
                <Dialog userName = 'Alexey'/>
                <Dialog userName = 'Pavel'/>          
                
            </div>

            <div className = {classes.line}>
                <span className={classes.sexy_line1}></span>
                <span className={classes.sexy_line2}></span>
            </div>  

            <div className = {classes.messages}>
            
                <Message message = 'Hi!'/>
                <Message message = 'What do you think about a weather today?'/>
                <Message message = 'Oh, this is bullshit'/>

            </div>

        </div>
    );
}

export default Dialogs;
import React from 'react';
import {updateMessageCreator, sendMessageCreator} from '../../Redux/messagesReducer';
import Dialogs from './dialogs';

const DialogsContainer = (props) =>{
    let state = props.store.getState().messagesPage;
    const onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (body) =>{
        props.store.dispatch(updateMessageCreator(body));
    }
    return <Dialogs sendMessage = {onSendMessageClick}
        messageChange = {onNewMessageChange}
        messagesPage = {state}/>
}

export default DialogsContainer;
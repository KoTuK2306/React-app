import React from 'react';
import {updateMessageCreator, sendMessageCreator} from '../../Redux/messagesReducer';
import Dialogs from './dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () =>{
    
    return( 
        <StoreContext.Consumer>
            {(store) =>{
                let state = store.getState().messagesPage;
                const onSendMessageClick = () =>{
                    store.dispatch(sendMessageCreator());
                }
                const onNewMessageChange = (body) =>{
                    store.dispatch(updateMessageCreator(body));
                }
                return(
                    <Dialogs sendMessage = {onSendMessageClick}
                             messageChange = {onNewMessageChange}
                             messagesPage = {state}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
    
}

export default DialogsContainer;
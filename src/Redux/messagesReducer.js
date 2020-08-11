const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-MESSAGE';

const messagesReducer = (state, action) =>{
    switch(action.type){
        case updateNewMessageText:
            state.newMessageText = action.newMessage;
            return state;
        case sendMessage: 
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: body, author: 'dimonZaklinatelGovna'});
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: sendMessage})
export const updateMessageCreator = (body) => ({type: updateNewMessageText, newMessage: body})

export default messagesReducer;

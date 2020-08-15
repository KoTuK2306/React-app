const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, userName: 'Dmitriy'},
        {id: 2, userName: 'Nikolay'},
        {id: 3, userName: 'Alexey'},
    ],

    messagesData: [
        {id: 1, message: 'Hi!', author: 'dmitriy2306'},
        {id: 2, message: 'What do you think about a weather today?', author: 'dimonZaklinatelGovna'},
        {id: 3, message: 'Oh, this is bullshit', author: 'dmitriy2306'},
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) =>{

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]    
    };   
    switch(action.type){
        case updateNewMessageText:
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        case sendMessage: 
            let body = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messagesData.push({id: 6, message: body, author: 'dimonZaklinatelGovna'});
            return stateCopy;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: sendMessage})
export const updateMessageCreator = (body) => ({type: updateNewMessageText, newMessage: body})
export default messagesReducer;

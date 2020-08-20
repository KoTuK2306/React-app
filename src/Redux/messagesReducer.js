const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: body, author: 'dimonZaklinatelGovna'}]
            }
        default: 
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateMessage = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: body})
export default messagesReducer;

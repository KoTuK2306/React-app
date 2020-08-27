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
    ]
}

const messagesReducer = (state = initialState, action) =>{ 
    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return{
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body, author: 'dimonZaklinatelGovna'}]
            }
        default: 
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})
export default messagesReducer;

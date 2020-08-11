const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
            {id: 1, likesCount: 23, message: 'My second post'},
            {id: 2, likesCount: 4, message: 'Beatiful day'},
            {id: 2, likesCount: 68, message: 'You\'re beatiful'}
            ],
            newPostText: ''
        },

        messagesPage: {
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
        },

        profiles: [
            {id: 'dmitriy2306'},
            {id: 'dimonZaklinatelGovna'},
            {id: 'nikolayNikolayKolya'},
            {id: 'lexaLepexa'}
        ]
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === addPost){
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.newPostText = '';
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);

        } else if (action.type === updateNewPostText){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === updateNewMessageText){
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);

        } else if (action.type === sendMessage){
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = '';
            this._state.messagesPage.messagesData.push({id: 6, message: body, author: 'dimonZaklinatelGovna'});
            this._callSubscriber(this._state);
        }
    }
}

export const sendMessageCreator = () => ({type: sendMessage})
export const updateMessageCreator = (body) => ({type: updateNewMessageText, newMessage: body})


export default store;
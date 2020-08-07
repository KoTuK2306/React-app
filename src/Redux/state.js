import {rerenderEntireTree} from './../render'

const state = {
    profilePage: {
        postData: [
        {id: 1, likesCount: 23, message: 'My second post'},
        {id: 2, likesCount: 4, message: 'Beatiful day'},
        {id: 2, likesCount: 68, message: 'You\'re beatiful'}
        ],
        newPostText: 'Dimooooooooooooon'
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
        ]
    },

    profiles: [
        {id: 'dmitriy2306'},
        {id: 'dimonZaklinatelGovna'},
        {id: 'nikolayNikolayKolya'},
        {id: 'lexaLepexa'}
    ]
}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.newPostText = '';
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
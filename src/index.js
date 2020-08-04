import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postData = [
  {id: 1, likesCount: 23, message: 'My second post'},
  {id: 2, likesCount: 4, message: 'Beatiful day'},
  {id: 2, likesCount: 68, message: 'You\'re beatiful'}

]

const dialogsData = [
  {id: 1, userName: 'Dmitriy'},
  {id: 2, userName: 'Nikolay'},
  {id: 3, userName: 'Alexey'},
  {id: 4, userName: 'Pavel'},
  {id: 5, userName: 'Alex'},
  {id: 6, userName: 'Andrey'},
  {id: 7, userName: 'Anton'},
  {id: 8, userName: 'Artem'},
  {id: 9, userName: 'Artur'},
  {id: 10, userName: 'Boris'},
  {id: 11, userName: 'Evgeniy'}
]

const messagesData = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'What do you think about a weather today?'},
  {id: 3, message: 'Oh, this is bullshit'},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

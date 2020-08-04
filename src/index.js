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

ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import './index.css';


let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {store.getState()} dispatch = {store.dispatch.bind(store)} store = {store}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
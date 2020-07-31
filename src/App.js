import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import News from './components/News/news';
import Music from '../src/components/Music/music';
import Settings from './components/Settings/settings';
import { Route } from 'react-router-dom';
import {BrowserRouter, route} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = {classes.content}>

        <Header />
        <Navbar />
        <div className = {classes.contentItem}>
          <Route path = '/dialogs'component = {Dialogs}/>
          <Route path = '/profile' component = {Profile}/>
          <Route path = '/news' component = {News}/>
          <Route path = '/music' component = {Music}/>
          <Route path = '/settings' component = {Settings}/>
        </div>
    
      </div>
      </BrowserRouter>
  );
}

export default App;
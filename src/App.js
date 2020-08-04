import React from 'react';
import classes from './App.module.css';
import Header from './../src/components/Header/header';
import Navbar from './../src/components/Navbar/navbar';
import Profile from './../src/components/Profile/profile';
import Dialogs from './../src/components/Dialogs/dialogs';
import News from './../src/components/News/news';
import Music from './../src/components/Music/music';
import Settings from './../src/components/Settings/settings';
import { Route } from 'react-router-dom';
import {BrowserRouter, route} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = {classes.content}>

        <Header />
        <Navbar />
        <div className = {classes.contentItem}>
          <Route exact path = '/dialogs'component = {Dialogs}/>
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
import React from 'react';
import classes from './App.module.css';
import Header from './../src/components/Header/header';
import Navbar from './../src/components/Navbar/navbar';
import Profile from './../src/components/Profile/profile';
import DialogsContainer from './../src/components/Dialogs/dialogsContainer';
import News from './../src/components/News/news';
import Music from './../src/components/Music/music';
import Settings from './../src/components/Settings/settings';
import Users from './components/Users/users';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className = {classes.content}>
        <Header />
        <Navbar />
        <div className = {classes.contentItem}>
          <Route exact path = '/dialogs' render = { () => <DialogsContainer />}/>
          <Route path = '/profile' render = { () => <Profile />}/>
          <Route path = '/news' render = { () => <News />}/>
          <Route path = '/music' render = { () => <Music />}/>
          <Route path = '/users' render = { () => <Users />}/>
          <Route path = '/settings' render = { () => <Settings />}/>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
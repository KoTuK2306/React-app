import React from 'react';
import classes from './App.module.css';
import HeaderContainer from './../src/components/Header/headerContainer';
import NavbarContainer from './../src/components/Navbar/navbarContainer';
import ProfileContainer from './../src/components/Profile/profileContainer';
import DialogsContainer from './../src/components/Dialogs/dialogsContainer';
import News from './../src/components/News/news';
import Music from './../src/components/Music/music';
import Settings from './../src/components/Settings/settings';
import UsersContainer from './components/Users/usersContainer';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className = {classes.content}>
        <HeaderContainer />
        <NavbarContainer />
        <div className = {classes.contentItem}>
          <Route exact path = '/dialogs' render = { () => <DialogsContainer />}/>
          <Route path = '/profile/:userId?' render = { () => <ProfileContainer />}/>
          <Route path = '/news' render = { () => <News />}/>
          <Route path = '/music' render = { () => <Music />}/>
          <Route path = '/users' render = { () => <UsersContainer />}/>
          <Route path = '/settings' render = { () => <Settings />}/>
          <Redirect to = '/profile'/>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
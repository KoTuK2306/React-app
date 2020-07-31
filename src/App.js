import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';

const App = (props) => {
  return (
    <div className = {classes.content}>

      <Header />
      <Navbar />
      <div className = {classes.contentItem}>

        {/* <Profile /> */}
        <Dialogs />
      </div>
      
    

    </div>
  );
}

export default App;
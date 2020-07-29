import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Description from './components/ProfileIformation/Description/description';

 const App = () => {
  return (
    <div className = 'content'>
      
      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}



export default App;

import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';

/* const navbarButton = document.querySelector('.navbarButton');
const content = document.querySelector('.content');

navbarButton.addEventListener('click', () => {
  content.classList.toggle('activeNavbar');
}) */

const App = () => {
  return (
    <div className = {classes.content}>
      
      <Header />
      <Navbar />
      <Profile />
      
    </div>
  );
}


export default App;

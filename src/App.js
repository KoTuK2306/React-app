import React from 'react';
import './App.css';
import Footer from './components/Footer/footer.js'
import Header from './components/Header/header.js';
import List from './components/List/list.js';

 const App = () => {
  return (
    <div class = 'content'>
    <Header />
    <List />
    <Footer /> 
    </div>
  );
}



export default App;

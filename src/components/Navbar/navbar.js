import React from 'react';
import './navbar.css'

const Navbar = () =>{
    return(
        <div className='nav'>
            <div className = 'nav-text'><a href = '#2'>Profile</a></div>
            <div className = 'nav-text'><a href = '#2'>Messages</a></div>
            <div className = 'nav-text'><a href = '#2'>News</a></div>
            <div className = 'nav-text'><a href = '#2'>Music</a></div>
            <div className = 'nav-text'><a href = '#2'>Settings</a></div>
        </div>
    );
}

export default Navbar;
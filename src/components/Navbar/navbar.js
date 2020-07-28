import React from 'react';
import './navbar.css'

const Navbar = () =>{
    return(
        <div className='nav'>
            <div className = 'nav-text'><a>Profile</a></div>
            <div className = 'nav-text'><a>Messages</a></div>
            <div className = 'nav-text'><a>News</a></div>
            <div className = 'nav-text'><a>Music</a></div>
            <div className = 'nav-text'><a>Settings</a></div>
        </div>
    );
}

export default Navbar;
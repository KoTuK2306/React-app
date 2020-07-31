import React from 'react';
import classes from './navbar.module.css'

const Navbar = () =>{
    return(
        <nav className = {classes.nav}>
            <div className = {classes.navText}><a href = '/profile'>Profile</a></div>
            <div className = {classes.navText}><a href = '/dialogs'>Messages</a></div>
            <div className = {classes.navText}><a href = '/news'>News</a></div>
            <div className = {classes.navText}><a href = '/music'>Music</a></div>
            <div className = {classes.navText}><a href = '/settings'>Settings</a></div>
        </nav>
    );
}

export default Navbar;
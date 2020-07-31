import React from 'react';
import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className = {classes.nav}>
            <div className = {classes.navText}><NavLink to = '/profile'>Profile</NavLink></div>
            <div className = {classes.navText}><NavLink to = '/dialogs'>Messages</NavLink></div>
            <div className = {classes.navText}><NavLink to = '/news'>News</NavLink></div>
            <div className = {classes.navText}><NavLink to = '/music'>Music</NavLink></div>
            <div className = {classes.navText}><NavLink to = '/settings'>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;
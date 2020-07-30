import React from 'react';
import classes from './navbar.module.css'

const Navbar = () =>{
    return(
        <div className = {classes.nav}>
            <div className = {classes.navText}><a href = '#2'>Profile</a></div>
            <div className = {classes.navText}><a href = '#2'>Messages</a></div>
            <div className = {classes.navText}><a href = '#2'>News</a></div>
            <div className = {classes.navText}><a href = '#2'>Music</a></div>
            <div className = {classes.navText}><a href = '#2'>Settings</a></div>
        </div>
    );
}

export default Navbar;
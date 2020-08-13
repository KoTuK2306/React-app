import React from 'react';
import classes from './header.module.css'

const Header = () =>{
    return(
        <header className = {classes.header}>
            <img src='https://www.svgrepo.com/show/40641/robot.svg' alt = '' className = {classes.logo}/>
        </header>
    );
}

export default Header;
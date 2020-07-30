import React from 'react';
import classes from './header.module.css'

const Header = () =>{
    return(
        <div className = {classes.header}>
            <img src='https://www.svgrepo.com/show/40641/robot.svg' className = {classes.logo}/>
        </div>
    );
}

export default Header;
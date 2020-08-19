import React from 'react';
import classes from './header.module.css';
import burgerMenu from '../../assets/images/burgerMenu.png'

const Header = (props) =>{
    console.log(props)
    return(
        <header className = {classes.header}>
            <img 
            src='https://www.svgrepo.com/show/40641/robot.svg'
            alt=''
            className={classes.logo}/>
            
            <img 
            className = {classes.burgerMenu}
            src = {burgerMenu}
            alt=''
            onClick={() => props.openNavbar(!props.isOpenNavbar)}/>
       
        </header>
    );
}

export default Header;
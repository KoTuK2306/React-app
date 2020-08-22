import React from 'react';
import classes from './header.module.css';
import burgerMenu from '../../assets/images/burgerMenu.png'
import { NavLink } from 'react-router-dom';

const Header = (props) =>{
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
            <div className={classes.authBlock}>
             
                {props.isAuth ? <h4>{props.login}</h4>
                : <NavLink to={'/login'}><h4>Login</h4></NavLink>}
            </div>
        </header>
    );
}

export default Header;
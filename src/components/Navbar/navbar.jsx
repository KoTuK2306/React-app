import React from 'react';
import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) =>{
    const isOpen = props.isOpenNavbar ? classes.open : '';
    return(
        <nav className = {`${classes.nav} ${isOpen}`}>
            <div className = {classes.navText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/profile' activeClassName = {classes.active}>
                    Profile
                </NavLink>
            </div>

            <div className = {classes.navText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/dialogs' activeClassName = {classes.active}>
                    Messages
                </NavLink>
            </div>

            <div className = {classes.navText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/news' activeClassName = {classes.active}>
                    News
                </NavLink>
            </div>

            <div className = {classes.navText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/music' activeClassName = {classes.active}>
                    Music
                </NavLink>
            </div>

            <div className = {classes.anotherNavText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/users' activeClassName = {classes.active}>
                    Find Users
                </NavLink>
            </div>

            <div className = {classes.anotherNavText}>
                <NavLink onClick={() => props.closeNavbar(false)} to = '/settings' activeClassName = {classes.active}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
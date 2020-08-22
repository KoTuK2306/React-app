import React from 'react';
import classes from './ava.module.css';
import avatar from '../../../../assets/images/avatar.svg';


const Ava=(props)=>{
    return(
        <div className = {classes.ava}>
            {props.avatar === null && <img className = {classes.avaItem} alt = '' src={avatar}/>}
            {props.avatar !== null && <img className = {classes.avaItem} alt = '' src={props.avatar}/>}
        </div>
    );
}

export default Ava;
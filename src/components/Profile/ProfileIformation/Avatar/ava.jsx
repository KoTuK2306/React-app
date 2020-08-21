import React from 'react';
import classes from './ava.module.css'

const Ava=(props)=>{
    return(
        <div className = {classes.ava}>
            <img className = {classes.avaItem} alt = '' src={props.avatar}/>
        </div>
    );
}

export default Ava;
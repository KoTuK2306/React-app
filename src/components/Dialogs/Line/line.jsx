import React from 'react';
import classes from './line.module.css';

const Line = () => {
    return(
        <div className = {classes.line}>
            <span className={classes.lineItem1}></span>
            <span className={classes.lineItem2}></span>
        </div>
    );
}

export default Line;
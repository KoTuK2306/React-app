import React from 'react';
import classes from './preloader.module.css';

const Preloader = () =>{
    return(
        <div className={classes.preloaderSection}>
            <div className={classes.preloader}></div>
        </div>
        
    );
}

export default Preloader;
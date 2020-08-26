import React from 'react';
import classes from './preloaderMini.module.css';

const PreloaderMini = () =>{
    return(
        <div className={classes.preloaderSection}>
            <div className={classes.preloader}></div>
        </div>
        
    );
}

export default PreloaderMini;
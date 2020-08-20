import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import classes from './preloader.module.css';

const Preloader = () =>{
    return(
        <div className={classes.img}>
            <img className={classes.imgItem} alt='' src={preloader}/>
        </div>
    );
}

export default Preloader;
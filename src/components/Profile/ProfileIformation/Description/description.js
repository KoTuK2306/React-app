import React from 'react';
import classes from './description.module.css';
import Ava from './../Avatar/ava';
import DescriptionItem from '../Description/DescriptionItem/description-item'


const Description = () =>{
    return(
        <div className = {classes.description}>
            <div className = {classes.descriptionItem}>
                
                <Ava />

                <div className = {classes.descriptionItemItem}>
                    <DescriptionItem />
                    <DescriptionItem />
                    <DescriptionItem />  
                </div>

            </div>
            
        </div>
    );
}

export default Description;
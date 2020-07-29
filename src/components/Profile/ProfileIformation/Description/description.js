import React from 'react';
import './description.css';
import Ava from './../Avatar/ava';
import DescriptionItem from '../Description/DescriptionItem/description-item'


const Description = () =>{
    return(
        <div className='description'>
            <div className = 'description-item'>
                
                <Ava />

                <div className = 'description-item-item'>
                    <DescriptionItem />
                    <DescriptionItem />
                    <DescriptionItem />  
                </div>

            </div>
            
        </div>
    );
}

export default Description;
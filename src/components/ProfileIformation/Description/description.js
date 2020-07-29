import React from 'react';
import './description.css';
import Ava from './../Avatar/ava';


const Description = () =>{
    return(
        <div className='description'>
            <div className = 'description-item'>
                <Ava />
                <div className = 'description-item-item'>
                    <p>Amet sunt exercitation consequat nisi aute qui nulla nulla.</p>
                    <p>Amet sunt exercitation consequat nisi aute qui nulla nulla.</p>
                    <p>Amet sunt exercitation consequat nisi aute qui nulla nulla.</p>
                </div>

            </div>
            
        </div>
    );
}

export default Description;
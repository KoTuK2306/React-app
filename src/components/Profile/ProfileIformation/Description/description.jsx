import React from 'react';
import classes from './description.module.css';
import Ava from '../Avatar/ava';
import DescriptionItem from './DescriptionItem/description-item';
import Preloader from '../../../common/Preloader/preloader';


const Description = (props) =>{
    if(!props.profile){
        return <Preloader />
    }
    
    
    return(
        <div className={classes.description}>
            <div className={classes.descriptionItem}>    
                <Ava avatar={props.profile.photos.large}/>
                <div className={classes.descriptionItemItem}>
                    <DescriptionItem isEmptyContacts={props.isEmptyContacts} profile={props.profile}/>
                </div>

            </div>
            
        </div>
    );
}

export default Description;
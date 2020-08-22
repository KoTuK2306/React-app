import React from 'react';
import classes from './descriptionItem.module.css';
import Preloader from '../../../../common/Preloader/preloader'

const DescriptionItem = (props) =>{
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div className={classes.description}>
            <div className={classes.firstPartfOfDescription}>
                <span>{props.profile.aboutMe !== null && `About me: ${props.profile.aboutMe}`}</span>
                <span>{`Full Name: ${props.profile.fullName}`}</span>
                <span>{`${props.lookingForAJob === true ? 'Looking for a job' : 'Not looking for a job'}`}</span>
            </div>
            <div className={classes.secondPartfOfDescription}>
            {props.isEmptyContacts && 'Contacts does not exist'}
            {!props.isEmptyContacts && 
                <div className={classes.contacts}>
                    <h4>Contacts:</h4>
                    <span>
                        {props.profile.contacts.facebook !== null && `Facebook: ${props.profile.contacts.facebook}`}
                    </span>
                    <span>
                        {props.profile.contacts.website !== null && `Website: ${props.profile.contacts.website}`}
                    </span>
                    <span>
                        {props.profile.contacts.vk !== null && `Vk: ${props.profile.contacts.vk}`}
                    </span>
                    <span>
                        {props.profile.contacts.twitter !== null && `Twitter: ${props.profile.contacts.twitter}`}
                    </span>
                    <span>
                        {props.profile.contacts.instagram !== null && `Instagram: ${props.profile.contacts.instagram}`}
                    </span>
                    <span>
                        {props.profile.contacts.youtube !== null && `YouTube: ${props.profile.contacts.youtube}`}
                    </span>
                    <span>
                        {props.profile.contacts.github !== null && `GitHub: ${props.profile.contacts.github}`}
                    </span>
                    <span>
                        {props.profile.contacts.mainLink !== null && `MainLink: ${props.profile.contacts.mainLink}`}
                    </span>
                </div>
            }  
            </div>
        </div>
    );
}

export default DescriptionItem;
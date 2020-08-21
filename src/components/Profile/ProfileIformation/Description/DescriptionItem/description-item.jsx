import React from 'react';
import classes from './descriptionItem.module.css';
import Preloader from '../../../../common/Preloader/preloader'

const DescriptionItem = (props) =>{
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div className={classes.description}>
            <span>{`Oбо мне: ${props.profile.aboutMe}`}</span>
            <span>{`Полное имя: ${props.profile.fullName}`}</span>
            <span>{`${props.lookingForAJob === true ? 'Не ищу работу' : 'Ищу работу'}`}</span>
            <div>
                Contacts:
                <div className={classes.contacts}>
                    <span>{`Facebook: ${props.profile.contacts.facebook}`}</span>
                    <span>{`Twitter: ${props.profile.contacts.twitter}`}</span>
                    <span>{`VK: ${props.profile.contacts.vk}`}</span>
                    <span>{`Instagram: ${props.profile.contacts.instagram}`}</span>
                    <span>{`GitHub: ${props.profile.contacts.github}`}</span>
                </div>
                
            </div>
        </div>
    );
}

export default DescriptionItem;
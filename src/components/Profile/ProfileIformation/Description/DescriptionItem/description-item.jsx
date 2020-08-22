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
                <span>{`Oбо мне: ${props.profile.aboutMe}`}</span>
                <span>{`Полное имя: ${props.profile.fullName}`}</span>
                <span>{`${props.lookingForAJob === true ? 'Не ищу работу' : 'Ищу работу'}`}</span>
            </div>
            <div className={classes.secondPartfOfDescription}>
            {props.profile.contacts === null ? null : 'Contacts:'}
                <div className={classes.contacts}>
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
            </div>
        </div>
    );
}

export default DescriptionItem;
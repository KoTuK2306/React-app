import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './../Profile/ProfileBackground/profile-background'
import Description from './../Profile/ProfileIformation/Description/description'
import NewPost from '../Profile/NewPost/new-post';
import MyPosts from '../Profile/MyPosts/my-posts';

const Profile = () =>{
    return (
        <div className = {classes.profile}>

            <ProfileBackground />
            <div className = {classes.aboutProfile}>
                <Description />
                <p>My posts</p>
                <MyPosts /> 
                <NewPost message = 'Pavel is a gay'/>
                <NewPost message = 'Beatiful day'/>
            </div>
   
        </div>
    );
}

export default Profile;
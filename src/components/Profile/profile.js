import React from 'react';
import './profile.css';
import ProfileBackground from './../Profile/ProfileBackground/profile-background'
import Description from './../Profile/ProfileIformation/Description/description'
import NewPost from '../Profile/NewPost/new-post';
import MyPosts from '../Profile/MyPosts/my-posts';

const Profile = () =>{
    return (
        <div className = 'profile'>

            <ProfileBackground />
            <Description />
            <NewPost />
            <MyPosts />
   
        </div>
    );
}

export default Profile;
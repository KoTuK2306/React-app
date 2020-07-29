import React from 'react';
import './profile.css';
import ProfileBackground from './../ProfileBackground/profile-background'
import Description from './../ProfileIformation/Description/description'
import NewPost from '../NewPost/new-post';
import MyPosts from '../MyPosts/my-posts';

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
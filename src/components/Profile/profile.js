import React from 'react';
import './profile.css';
import ProfileBackground from './../ProfileBackground/profile-background'

const Profile = () =>{
    return (
        <div className = 'profile'>

            <ProfileBackground />
            
            <div> Ava + description</div>
            <div>NewPost</div>
            <div>My posts</div>
   
        </div>
    );
}

export default Profile;
import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './ProfileBackground/profile-background'
import Description from './ProfileIformation/Description/description'
import MyPostsContainer from './MyPosts/my-postsContainer';

const Profile = (props) =>{
    return (
        <div>
            <ProfileBackground />
            <div className = {classes.profile}>
                <div className = {classes.aboutProfile}>
                    <Description />
                    <p>My posts</p>
                    <MyPostsContainer /> 
                </div>
            </div>
        </div>
    );
}

export default Profile;
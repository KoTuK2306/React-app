import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './../Profile/ProfileBackground/profile-background'
import Description from './../Profile/ProfileIformation/Description/description'
import NewPost from '../Profile/NewPost/new-post';
import MyPosts from '../Profile/MyPosts/my-posts';


const postData = [
    {id: 1, likesCount: 23, message: 'My second post'},
    {id: 2, likesCount: 4, message: 'Beatiful day'},
    {id: 2, likesCount: 68, message: 'You\'re beatiful'}

]


const Profile = () =>{
    return (
        <div className = {classes.profile}>

            <ProfileBackground />
            <div className = {classes.aboutProfile}>
                <Description />
                <p>My posts</p>
                <MyPosts /> 
                <NewPost likesCount = {postData[0].likesCount} message = {postData[0].message}/>
                <NewPost likesCount = {postData[1].likesCount} message = {postData[1].message}/>
                <NewPost likesCount = {postData[2].likesCount} message = {postData[2].message}/>
            </div>
   
        </div>
    );
}

export default Profile;
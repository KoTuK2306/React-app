import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './ProfileBackground/profile-background'
import Description from './ProfileIformation/Description/description'
import Post from './Post/post';
import MyPosts from './MyPosts/my-posts';


const postData = [
    {id: 1, likesCount: 23, message: 'My second post'},
    {id: 2, likesCount: 4, message: 'Beatiful day'},
    {id: 2, likesCount: 68, message: 'You\'re beatiful'}

]


const post = postData
.map(postData => <Post likesCount = {postData.likesCount} message = {postData.message}/>);

const Profile = () =>{
    return (
        <div className = {classes.profile}>

            <ProfileBackground />
            <div className = {classes.aboutProfile}>
                <Description />
                <p>My posts</p>
                <MyPosts /> 
                {post}
            </div>
   
        </div>
    );
}

export default Profile;
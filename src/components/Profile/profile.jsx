import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './ProfileBackground/profile-background'
import Description from './ProfileIformation/Description/description'
import Post from './Post/post';
import MyPosts from './MyPosts/my-posts';

const Profile = (props) =>{
    
    const post = props.state.postData
    .map(postData => <Post likesCount = {postData.likesCount} message = {postData.message}/>);

    return (
        <div className = {classes.profile}>

            <ProfileBackground />
            <div className = {classes.aboutProfile}>
                <Description />
                <p>My posts</p>
                <MyPosts addPost = {props.addPost}
                    newPostText = {props.state.newPostText}
                    updateNewPostText = {props.updateNewPostText}/> 
                {post}
            </div>
   
        </div>
    );
}

export default Profile;
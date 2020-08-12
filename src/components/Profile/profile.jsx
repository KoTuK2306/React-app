import React from 'react';
import classes from './profile.module.css';
import ProfileBackground from './ProfileBackground/profile-background'
import Description from './ProfileIformation/Description/description'
import Post from './Post/post';
import MyPostsContainer from './MyPosts/my-postsContainer';

const Profile = (props) =>{
    
    const post = props.state.postData
    .map(postData => <Post likesCount = {postData.likesCount} message = {postData.message}/>);

    return (
        <div className = {classes.profile}>

            <ProfileBackground />
            <div className = {classes.aboutProfile}>
                <Description />
                <p>My posts</p>
                <MyPostsContainer store = {props.store} newPostText = {props.state.newPostText}
                            dispatch = {props.dispatch}/> 
                {post}
            </div>
   
        </div>
    );
}

export default Profile;
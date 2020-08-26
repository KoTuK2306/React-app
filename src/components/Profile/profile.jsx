import React from "react";
import classes from "./profile.module.css";
import Description from "./ProfileIformation/Description/description";
import MyPostsContainer from "./MyPosts/my-postsContainer";
import ProfileStatus from "./ProfileStatus/profileStatus";

const Profile = (props) => {
  return (
    <div>
      <div className={classes.profile}>
        <div className={classes.aboutProfile}>
          <Description
            profile={props.profile}
            isEmptyContacts={props.isEmptyContacts}
          />
          <ProfileStatus status={props.status}
                         updateStatus={props.updateStatus}/>
          <p>My posts</p>
          <MyPostsContainer />
        </div>
      </div>
    </div>
  );
};
export default Profile;

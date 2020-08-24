import React from "react";
import classes from "./users.module.css";
import avatarMan from "./../../assets/images/avatar.svg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.pages}>
        {pages.map((p) => {
          return (
            <span
              className={`${classes.page} ${
                props.currentPage === p && classes.selectedPage
              }`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={props.id}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={props.id}>
          <div className={classes.user}>
            <div className={classes.userAva}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    className={classes.userPhoto}
                    src={u.photos.small !== null ? u.photos.small : avatarMan}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingProgress.some((id) => id === u.id)}
                    className={classes.button}
                    onClick={() => {props.unfollow(true, u.id)}}>
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingProgress.some((id) => id === u.id)}
                    className={classes.button}
                    onClick={() => {props.follow(true, u.id)}}>
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={classes.userInfo}>
              <div className={classes.userInfoItem}>
                <div className={classes.userName}>
                  {u.name}
                  <div className={classes.userLocation}>
                    {"No information available"}
                  </div>
                </div>
                <div>{u.status === null ? "Status is empty" : u.status}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

import React from "react";
import Users from "./users";
import Preloader from "../common/Preloader/preloader.jsx";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
} from "../../Redux/usersReducer";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgress={this.props.followingProgress}
          setCurrentPage={this.props.setCurrentPage}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFollowingProgress,
    setCurrentPage,
    getUsers,
  })
)(UsersContainer);

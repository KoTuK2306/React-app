import React from "react";
import Users from "./users";
import Preloader from "../common/Preloader/preloader.jsx";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  receiveUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
} from "../../Redux/usersReducer";
import { compose } from "redux";
import {
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
  getCurrentPage,
  getIsFetching,
  getFollowingProgress } from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.receiveUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.receiveUsers(pageNumber, this.props.pageSize);
  };
  debugger;
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
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFollowingProgress,
    setCurrentPage,
    receiveUsers,
  })
)(UsersContainer);

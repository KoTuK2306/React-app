import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
//import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  state = {
    isEmptyContacts: true,
  };
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11067//2;
    }

    this.props.getUserProfile(userId, () => {
      for (const value of Object.values(this.props.profile.contacts)) {
        if (value !== null) {
          this.setState({
            isEmptyContacts: false,
          });
        }
      }
    });
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isEmptyContacts={this.state.isEmptyContacts}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);

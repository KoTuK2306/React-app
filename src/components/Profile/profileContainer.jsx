import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  state = {
    isEmptyContacts: true,
  };
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11067;
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
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isEmptyContacts={this.state.isEmptyContacts}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

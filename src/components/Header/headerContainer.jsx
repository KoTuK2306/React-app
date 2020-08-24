import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { isOpenNavbarAC, authMe } from "../../Redux/socialReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isOpenNavbar: state.forAllPage.isOpenNavbar,
    isAuth: state.forAllPage.isAuth,
    login: state.forAllPage.login,
    id: state.forAllPage.id,
    email: state.forAllPage.email,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    openNavbar: (openStatus) => {
      dispatch(isOpenNavbarAC(openStatus));
    },
    authMe: () => {
      dispatch(authMe());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

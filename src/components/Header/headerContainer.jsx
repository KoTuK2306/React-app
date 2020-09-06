import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { isOpenNavbarAC, logout } from "../../Redux/socialReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isOpenNavbar: state.forAllPage.isOpenNavbar,
    isAuth: state.forAllPage.isAuth,
    login: state.forAllPage.login
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    openNavbar: (openStatus) => {
      dispatch(isOpenNavbarAC(openStatus));
    },
    logout: () =>{
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

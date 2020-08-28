import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { isOpenNavbarAC, authMe, logout } from "../../Redux/socialReducer";

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
    login: state.forAllPage.login
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
    logout: () =>{
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

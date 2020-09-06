import React from "react";
import classes from "./App.module.css";
import HeaderContainer from "./../src/components/Header/headerContainer";
import NavbarContainer from "./../src/components/Navbar/navbarContainer";
import ProfileContainer from "./../src/components/Profile/profileContainer";
import DialogsContainer from "./../src/components/Dialogs/dialogsContainer";
import News from "./../src/components/News/news";
import Music from "./../src/components/Music/music";
import Settings from "./../src/components/Settings/settings";
import UsersContainer from "./components/Users/usersContainer";
import Login from "./components/Login/login";
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { initializeApp } from '../src/Redux/appReducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized){
      return <Preloader />
    }
    
    return (
        <div className={classes.content}>
          <HeaderContainer />
          <NavbarContainer />
          <div className={classes.contentItem}>
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    initialized: state.app.initialized
  }
}

export default  compose(withRouter, connect (mapStateToProps, { initializeApp }))(App)

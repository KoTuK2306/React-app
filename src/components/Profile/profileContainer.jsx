import React from 'react';
import Profile from './profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../Redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{
state={
    isEmptyContacts: true,
}
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data);
            for(const value of Object.values(this.props.profile.contacts)){
                if(value !== null){
                    this.setState({
                        isEmptyContacts: false
                    })
                }
            }
        });   
    }   
    render(){
        
        return(
            <Profile {...this.props} profile={this.props.profile} isEmptyContacts={this.state.isEmptyContacts}/>
        );
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect (mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);
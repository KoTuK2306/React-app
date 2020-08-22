import React from 'react';
import Profile from './profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../Redux/profileReducer';

class ProfileContainer extends React.Component{
state={
    isEmptyContacts: true,
}
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);
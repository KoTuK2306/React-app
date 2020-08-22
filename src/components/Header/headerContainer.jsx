import React from 'react'
import Header from './header';
import {connect} from 'react-redux';
import { isOpenNavbarAC, setUserData } from '../../Redux/socialReducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0){
                let {email, id, login} = response.data.data;
                this.props.setUserData(email, id, login)
            }
        }); 
    }
    render(){
        return <Header {...this.props}/>
    }
} 

let mapStateToProps = (state) => {
    return{
        isOpenNavbar: state.forAllPage.isOpenNavbar,
        isAuth: state.forAllPage.isAuth,
        login: state.forAllPage.login,
        id: state.forAllPage.id,
        email: state.forAllPage.email
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openNavbar: (openStatus) => {
            dispatch(isOpenNavbarAC(openStatus))
        },
        setUserData: (id, email, login) =>{
            dispatch(setUserData(id, email, login))
        }  
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);
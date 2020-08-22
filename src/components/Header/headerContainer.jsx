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
            console.log(response)
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
              this.props.setUserData(id, email, login)  
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
        isAuth: state.forAllPage.login
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openNavbar: (openStatus) => {
            dispatch(isOpenNavbarAC(openStatus))
        },
        setUserData: (data) =>{
            dispatch(setUserData(data))
        }  
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);
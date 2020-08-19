import Header from './header';
import {connect} from 'react-redux';
import { isOpenNavbarAC } from '../../Redux/socialReducer';

let mapStateToProps = (state) => {
    return{
        isOpenNavbar: state.forAllPage.isOpenNavbar
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openNavbar: (openStatus) => {
            dispatch(isOpenNavbarAC(openStatus))
        }     
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Header);
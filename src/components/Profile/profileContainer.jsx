import Profile from './profile';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        isOpenNavbar: state.isOpenNavbar
    }
}

export default connect (mapStateToProps)(Profile);
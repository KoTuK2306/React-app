import {updateMessage, sendMessage} from '../../Redux/messagesReducer';
import Dialogs from './dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage 
    };
}

const DialogsContainer = connect(mapStateToProps, {updateMessage, sendMessage})(Dialogs);
export default DialogsContainer;
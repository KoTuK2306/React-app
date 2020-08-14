import {updateMessageCreator, sendMessageCreator} from '../../Redux/messagesReducer';
import Dialogs from './dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage 
    };
}
let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        messageChange: (body) => {
            dispatch(updateMessageCreator(body));
        }
    };
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
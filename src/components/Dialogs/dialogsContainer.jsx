import { updateMessage, sendMessage } from "../../Redux/messagesReducer";
import Dialogs from "./dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  updateMessage,
  sendMessage,
})(AuthRedirectComponent);
export default DialogsContainer;

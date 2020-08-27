import React from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./dialogs.module.css";
import Line from "./Line/line";
import Dialog from "./Dialog/dialog";
import Message from "./Message/message";
import AddMessageFormRedux from "./AddMessageForm/addMessageForm";

const Dialogs = (props) => {
  let state = props.messagesPage;
  const dialogs = state.dialogsData.map((dialog) => (
    <Dialog userName={dialog.userName} id={dialog.id} key={dialog.id} />
  ));
  const messages = state.messagesData.map((message) => (
    <Message
      me={message.author === "dmitriy2306" ? true : false}
      message={message.message}
      key={message.id}
    />
  ));
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };
  return (
    <BrowserRouter>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogs}</div>
        <Line />
        <div className={classes.messages}>{messages}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </BrowserRouter>
  );
};

export default Dialogs;

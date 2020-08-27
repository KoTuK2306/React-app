import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./addMessageForm.module.css";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.inputArea}>
      <Field
        className={classes.textarea}
        component="textarea"
        name="newMessageText"
      />
      <button className={classes.button}>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default AddMessageFormRedux;

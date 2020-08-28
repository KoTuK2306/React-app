import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./addMessageForm.module.css";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { requiredField, maxLengthCreator } from "../../../utils/validators/validators";

const maxLenght = maxLengthCreator(20)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.inputArea}>
      <Field
        component={Textarea}
        name="newMessageText"
        validate={[requiredField, maxLenght]}
      />
      <button className={classes.button}>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default AddMessageFormRedux;
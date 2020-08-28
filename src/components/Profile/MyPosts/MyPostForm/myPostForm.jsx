import React from "react";
import classes from "./myPostForm.module.css";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLenght = maxLengthCreator(10);

const SendPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.myPosts}>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[requiredField, maxLenght]}
        />
        <button className={classes.button}>Add post</button>
      </div>
    </form>
  );
};

const SendPostFormRedux = reduxForm({ form: "sendPostForm" })(SendPostForm);

export default SendPostFormRedux;

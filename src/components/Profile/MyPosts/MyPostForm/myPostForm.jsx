import React from "react";
import classes from "./myPostForm.module.css";
import { Field, reduxForm } from "redux-form";

const SendPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.myPosts}>
        <Field
          component="textarea"
          className={classes.input}
          name="newPostText"
        />
        <button className={classes.button}>Add post</button>
      </div>
    </form>
  );
};

const SendPostFormRedux = reduxForm({ form: "sendPostForm" })(SendPostForm);

export default SendPostFormRedux;
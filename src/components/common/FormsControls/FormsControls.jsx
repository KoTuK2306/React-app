import React from 'react';
import classes from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.textarea}>
      <textarea className={`${classes.textareaItem} ${hasError && classes.error}`} {...input} {...props}/>
      {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.input}>
      <input className={`${classes.inputItem} ${hasError && classes.error}`} {...input} {...props}/>
      {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
    </div>
  );
};

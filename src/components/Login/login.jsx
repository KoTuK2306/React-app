import React from "react";
import { Field, reduxForm } from 'redux-form'
import classes from "./login.module.css";
 
const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div className={classes.input}>
            <Field className={classes.inputItem} placeholder={'Login'} name={'login'} component={'input'}/>  
          </div>
          <div className={classes.input}>
            <Field className={classes.inputItem} placeholder={'Password'} name={'password'} component={'input'}/>  
          </div>
          <div className={classes.checkbox}>
            <Field className={classes.checkboxItem} id={'checkbox'} type={'checkbox'} name={'rememberMe'} component={'input'}/>
            <label className={classes.checkboxText} for='checkbox'>remember me</label>
          </div>
          <div>
              <button className={classes.button}>Login</button>
          </div>
      </form>
  );
};


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const onSubmit = (formData) => {
    console.log(formData)
}

const Login = () => {
  return (
    <div className={classes.loginForm}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;

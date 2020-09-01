import React from "react";
import { Field, reduxForm } from 'redux-form'
import classes from "./login.module.css";
import { Input } from "../common/FormsControls/FormsControls";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";
import {connect} from 'react-redux';
import { login, logout } from '../../Redux/socialReducer';
import { Redirect } from "react-router-dom";

const maxLenght = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div className={classes.input}>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredField, maxLenght]}/>  
          </div>
          <div className={classes.input}>
            <Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[requiredField, maxLenght]}/>  
          </div>
          <div className={classes.checkbox}>
            <Field className={classes.checkboxItem} id={'checkbox'} type={'checkbox'} name={'rememberMe'} component={'input'}/>
            <label className={classes.checkboxText} for='checkbox'>remember me</label>
          </div>
          { props.error && <div className={classes.formSummaryError}>  {props.error} </div>}
          <div>
              <button className={classes.button}>Login</button>
          </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  }

  if (props.isAuth){
    return <Redirect to={ '/profile' } />
  }

  return (
    <div className={classes.loginForm}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};


const mapStateToProps = (state) =>({
  isAuth: state.forAllPage.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login)
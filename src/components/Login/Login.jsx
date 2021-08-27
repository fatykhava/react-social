import React from 'react';
import style from './Login.module.css';
import LoginReduxForm from './LoginForm';
import {login} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Login extends React.Component {
  onSubmit = (formObj) => {
    this.props.login(formObj.email, formObj.password, formObj.rememberMe);
  }

  render = () => {
    if (this.props.isAuth) {
      return <Redirect to={"/profile"}/>
    }

    return (
      <div className={style.formContainer}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);

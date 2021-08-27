import React from 'react';
import style from './Login.module.css';
import styleForm from './../common/FormControls/FromControls.module.scss';
import {reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormControls/FromControls";
import required from "../../utils/validators";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={styleForm.formSummaryError}> {error} </div>}
      {createField('Email', 'email', [required], Input, {autoComplete: 'true', type: 'email'})}
      {createField('Password', 'password', [required], Input, {autoComplete: 'true', type: 'password'})}
      <div className={style.checkbox}>
        <label htmlFor='loginCheckbox'>Remember me</label>
        {createField('', 'rememberMe', [], 'input', {id: 'loginCheckbox', type: 'checkbox'})}
      </div>
      <div>
        <button type={'submit'}>Log in</button>
      </div>
    </form>
  );
}

export default reduxForm({form: 'login'})(LoginForm);

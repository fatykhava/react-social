import React from 'react';
import style from './Dialogs.module.scss';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FromControls";
import required, {maxLengthCreator} from "../../utils/validators";

const maxLength = maxLengthCreator(10);

const AddMessageForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit} className={style.form}>
        <Field component={Textarea}
               validate={[required, maxLength]}
               name={'newMessage'}
               rows='5' placeholder='Your message' />
        <button type={'submit'}>Send</button>
      </form>
  );
}

export default reduxForm({form: 'addMessage'})(AddMessageForm);

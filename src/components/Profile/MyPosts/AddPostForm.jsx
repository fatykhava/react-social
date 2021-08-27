import React from 'react';
import style from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FromControls";
import required, {maxLengthCreator} from "../../../utils/validators";

const maxLength = maxLengthCreator(20);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      <Field component={Textarea}
             validate={[required, maxLength]}
             name='newPost'
             cols='50' rows='5' placeholder='Your post'/>
      <button type={'submit'}>Add post</button>
    </form>
  );
}

export default reduxForm({form: 'addPost'})(AddPostForm);

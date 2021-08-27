import React from 'react';
import style from './FromControls.module.scss';
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validate, component, props = {}) => (
  <div>
    <Field component={component} validate={validate} name={name} placeholder={placeholder} {...props}/>
  </div>
)

export default FormControl;

import React from "react";
import style from "./FormControls.module.css";
import {Field} from "redux-form";

export const FormControl = ({meta:{touched,error}, children}) => {
    // const hasError = touched && error;
    return <div>
        <div className={style.formControl}>
            {children}
            {touched && error && <span>{error}</span>}
        </div>
    </div>
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}
export const createField = (placeholder, name, component, validators, props={}, text='') => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        /> {text}
    </div>
}

import React from "react";
import style from "./FormControls.module.css";

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={style.formControl}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps}=props;
    return <FormControl {...props}>
            <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps}=props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}

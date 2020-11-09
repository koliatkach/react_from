import React from 'react'
import classes from './TextInput.module.css'
import {useField} from "formik";

const TextInput = ( {label, ...props} ) => {
    const[field, meta] = useField(props);

    return(
        <div className={classes['div']}>
            <label className={classes['label']} htmlFor={props.id || props.name }>{label}:</label>
            <input className={classes['input']} {...field}{...props}/>
            {meta.touched && meta.error ? (
                <div className={classes['error']}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default TextInput
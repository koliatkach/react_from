import React from 'react'
import classes from './Checkbox.module.css'
import {useField} from "formik";

const Checkbox = ( {children, ...props} ) => {
    const[field, meta] = useField(props);

    return(
        <div>
            <label className={classes['label']}>
                <input className={classes['input']} type='checkbox' {...field}{...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <span>{meta.error}</span>
            ) : null}
        </div>
    )
}

export default Checkbox
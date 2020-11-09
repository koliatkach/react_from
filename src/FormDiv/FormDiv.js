import React, {Component} from 'react'
import TextInput from "../components/TextInput/TextInput";
import Checkbox from "../components/CheckboxCustom/Checkbox";

import classes from './FormDiv.module.css'

import {Form, Formik} from "formik";
import * as Yup from 'yup'

class FormDiv extends Component {
    render() {
        return (
            <div className={classes['FormDiv']}>
                <div className={classes['FormDivWrapper']}>
                    <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        acceptedTerms: false,
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min('2', 'Name must be longer')
                            .max('15', 'Name must be shorter')
                            .required('Fill in the field'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Fill in the field'),
                        acceptedTerms: Yup.boolean()
                            .required('Must click on')
                            .oneOf([true], 'You must accept')
                    })}
                    onSubmit={(values , {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            resetForm()
                            setSubmitting(false)
                        },2000)
                    }}
                    >
                        {props => (
                            <Form>
                                <h1>Sign in</h1>
                                <TextInput label='Name' name='name' type='text' placeholder='Kolia'/>
                                <TextInput label='Email' name='email' type='email' placeholder='kolia@gmail.com'/>
                                <Checkbox name='accepted'>
                                    I accept
                                </Checkbox>
                                <button className={classes['btnSubmit']} type='submit'>{props.isSubmitting ? '...Loading' : 'Submit'}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default FormDiv
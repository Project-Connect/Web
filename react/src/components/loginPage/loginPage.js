import React from 'react'
import { Field, reduxForm } from 'redux-form'


const validate = values => {
    const errors = {};

    if (!values.github_id) {
        errors.github_id = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};


const onSubmit = values => {
    alert('Send data: login for ' + values.github_id + ' password: ' + values.password);
    window.location = '/';
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


const loginPage = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div style={{ padding: 15 }}>
            <form onSubmit={handleSubmit}>
                <Field name="github_id" type="text" component={renderField} label="GitHub Username"/>
                <Field name="password" type="password" component={renderField} label="GitHub Password"/>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    form: 'loginPage',  // a unique identifier for this form
    onSubmit,
    validate,                // <--- validation function given to redux-form
})(loginPage )

import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.start_date) {
        errors.start_date = 'Required'
    }
    if (!values.size) {
        errors.size = 'Required'
    } else if (isNaN(Number(values.size))) {
        errors.size = 'Must be a number'
    } else if (Number(values.size) < 2) {
        errors.size = 'Sorry, you must be more than 1 person'
    }

    return errors
};


const onSubmit = values => {
    alert('Sent data: for project ' + values.title)
    fetch('https://localhost:8000/api/projects', {
        method: "POST",
        body: JSON.stringify({
            "name": values.title,
            "description": values.description,
            "github": values.github,
            "url": values.domain,
            "project_start_date": values.date
        })
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
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


const newProjectComponent = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div style={{ padding: 15 }}>
            <form onSubmit={handleSubmit}>
                <Field name="title" type="text" component={renderField} label="Title"/>
                <Field name="github" type="url" component={renderField} label="GitHub URL"/>
                <Field name="domain" type="url" component={renderField} label="Project URL"/>
                <Field name="description" type="text" component={renderField} label="Description"/>
                <Field name="start_data" type="date" component={renderField} label="Start Date" />
                <Field name="stacks" type="text" component={renderField} label="Stacks/Tools Used" />
                <Field name="size" type="number" component={renderField} label="Group Size"/>
                <Field name="info" type="text" component={renderField} label="Additional Info" />
                <Field name="attachements" type="file" component={renderField} label="Attachements" />
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    form: 'newProjectComponent',  // a unique identifier for this form
    onSubmit,
    validate,                // <--- validation function given to redux-form
})(newProjectComponent )
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";

const validate = values => {
    const errors = {};

    if (!values.id) {
        errors.id = 'Required'
    }
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.bio) {
        errors.bio = 'Required'
    }
    if (!values.email) {
        errors.email= 'Required'
    }
    if (!values.photo) {
        errors.photo = 'Required'
    }
    if (!values.linked_in) {
        errors.linked_in = 'Required'
    }
    if (!values.github) {
        errors.github = 'Required'
    }

    return errors
};


const onSubmit = values => {
		console.log(values)
    alert('Updating user information: ' + values.id)
    fetch('https://localhost:8000/api/user/update', {
        method: "POST",
        body: JSON.stringify({
						"id": values.id,
            "name": values.name,
            "bio": values.bio,
						"email": values.email,
						"photo": values.photo,
						"linked_in": values.linked_in,
            "github": values.github,
        })
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => this.props.showError(error.toString()));
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


const userEditView = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div style={{ padding: 15 }}>
            <form onSubmit={handleSubmit}>
                <Field name="id" type="text" component={renderField} label="User ID"/>
                <Field name="name" type="text" component={renderField} label="User name"/>
                <Field name="bio" type="text" component={renderField} label="User biography"/>
                <Field name="email" type="text" component={renderField} label="User e-mail" />
                <Field name="photo" type="text" component={renderField} label="User photo" />
                <Field name="linked_in" type="text" component={renderField} label="LinkedIn account"/>
                <Field name="github" type="text" component={renderField} label="GitHub account" />
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
                </div>
            </form>
        </div>
    )
};

const userEditForm = reduxForm({
    form: 'userEditView',  // a unique identifier for this form
    onSubmit,
    validate,                // <--- validation function given to redux-form
})(userEditView)

const mapDispatchToProps = {
  showError,
}

export default connect(null,mapDispatchToProps)(userEditForm);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Form validators
import { required, minLength6, email, passwordsMustMatch } from '../../../../utils/formValidators';

// Components
import SignupButton from './SignupButton';

// Styles
import './style.scss';

class SignupForm extends Component {
    state = {
        btn_disabled: true
    };

    componentDidUpdate(prevProps) {
        if (this.props.valid !== prevProps.valid) {
            this.props.valid === true ?
                this.enableButton() :
                    this.disableButton();
        }
    }

    enableButton = () => {
        this.setState({
            btn_disabled: false
        });
    }

    disableButton = () => {
        this.setState({
            btn_disabled: true
        });
    }

    render() {
        return (
            <form className="signup__form">
                <div className="input-group">
                    <Field
                        name="fullName"
                        component="input"
                        type="text"
                        validate={required}
                    />
                    <label htmlFor="fullName">
                        Full name
                    </label>
                </div>

                <div className="input-group">
                    <Field 
                        name="email"
                        component="input"
                        type="email"
                        validate={[required, email]}
                    />
                    <label htmlFor="email">
                        Email
                    </label>
                </div>

                <div className="input-group">
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        validate={[required, minLength6]}
                    />
                    <label htmlFor="password">
                        Password
                    </label>
                </div>

                <div className="input-group">
                    <Field 
                        name="confirmPassword"
                        component="input"
                        type="password"
                        validate={[required, passwordsMustMatch]}
                    />
                    <label htmlFor="confirmPassword">
                        Confirm password
                    </label>
                </div>

                <SignupButton isDisabled={this.state.btn_disabled} />
            </form>
        );
    }
}

SignupForm.propTypes = {
    valid: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'signup'
})(SignupForm);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import AuthInputGroup from '../../../layout/forms/AuthInputGroup';
import SigninButton from './SigninButton';

class SigninForm extends Component {
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

    enableButton = () =>
        this.setState({
            btn_disabled: false
        });
    
    disableButton = () =>
        this.setState({
            btn_disabled: true
        });

    render() {
        return (
            <form className="signin__form">
                <AuthInputGroup>
                    <Field 
                        name="email"
                        component="input"
                        type="email"
                    />
                    <label htmlFor="email">
                        Email
                    </label>
                </AuthInputGroup>
                <AuthInputGroup>
                    <Field 
                        name="password"
                        component="input"
                        type="password"
                    />
                    <label htmlFor="password">
                        Password
                    </label>
                </AuthInputGroup>

                <SigninButton isDisabled={this.state.btn_disabled} />
            </form>
        );
    }
}

SigninForm.propTypes = {
    valid: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'signin'
})(SigninForm);
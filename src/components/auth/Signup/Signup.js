import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// Form validators
import { required, minLength6, email, passwordsMustMatch } from '../../../utils/formValidators';

// Components
import H1Bold from '../../text/H1Bold';
import H2Regular from '../../text/H2Regular';
import ProgressBar from './ProgressBar';

// Styles
import './style.scss';

class Signup extends Component {
    componentDidMount() {
        console.log('Signup PROPS: ', this.props);
    }

    render() {
        return (
            <div className="signup">
                <header className="signup__header">
                    <div className="signup__h1">
                        <H1Bold>
                            Create an account
                        </H1Bold>
                    </div>
                    <div className="signup__h2">
                        <H2Regular>
                            Tell us about yourself
                        </H2Regular>
                    </div>
                    
                    <ProgressBar />
                </header>
                <form>
                    <div className="input-group">
                        <label htmlFor="fullName">
                            Full name
                        </label>
                        <Field
                            name="fullName"
                            component="input"
                            type="text"
                            validate={required}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <Field 
                            name="email"
                            component="input"
                            type="email"
                            validate={[required, email]}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            validate={[required, minLength6]}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <Field 
                            name="confirmPassword"
                            component="input"
                            type="password"
                            validate={[required, passwordsMustMatch]}
                        />
                    </div>

                    <button type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signup'
})(Signup);
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <form>
                    <div className="input-group">
                        <label htmlFor="firstName">
                            First Name
                        </label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password" />
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
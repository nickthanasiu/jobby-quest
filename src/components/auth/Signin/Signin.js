import React from 'react';

// Components
import H1Bold from '../../text/H1Bold';
import SigninForm from './SigninForm';

// Styles
import './style.scss';

const Signin = () => (
    <div className="signin">
        <header className="signin__header">
            <div className="signin__h1">
                <H1Bold>
                    Sign in
                </H1Bold>
            </div>
        </header>

        <SigninForm />
    </div>
);

export default Signin;
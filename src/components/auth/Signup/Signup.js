import React from 'react';

// Components
import H1Bold from '../../text/H1Bold';
import H2Regular from '../../text/H2Regular';
import SignupForm from './SignupForm';
import ProgressBar from './ProgressBar';

// Styles
import './style.scss';

const Signup = () => (
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
        
        <SignupForm />
    </div>
);

export default Signup;
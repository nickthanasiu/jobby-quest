import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SignupButton = ({ isDisabled }) => (
    <button 
        className="signup__button"
        type="submit" 
        disabled={isDisabled}
    >
        Sign Up
    </button>
);

SignupButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired
};

export default SignupButton;
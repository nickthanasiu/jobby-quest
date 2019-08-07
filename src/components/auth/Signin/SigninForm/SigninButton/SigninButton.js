import React from 'react';
import PropTypes from 'prop-types';

const SigninButton = ({ isDisabled }) => (
    <button
        className="signin__button"
        type="submit"
        disabled={isDisabled}
    >
        Sign in
    </button>
);

SigninButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired
};

export default SigninButton;
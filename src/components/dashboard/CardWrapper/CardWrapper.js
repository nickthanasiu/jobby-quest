import React, { useState } from 'react';
import ManualInput from '../ManualInput';

// Styles
import './CardWrapper.styles.scss';

const CardWrapper = ({ children, childComponentType, handleClick }) => {
    return (
        <div
            className={`card-wrapper ${childComponentType}`}
            onClick={handleClick}
        >
            { children }
        </div>
    );
};

export default CardWrapper;
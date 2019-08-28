import React, { useState } from 'react';

//Styles
import './URLInput.styles.scss';

const URLInput = ({ failedToSubmit }) => {

    const handleEnterKeyPress = e => {
        if (e.key === 'Enter') {
            console.log(`Creating card with url: ${e.target.value}`);
        }
    };

    return (
        <div className={`url-input-wrapper ${failedToSubmit === true ? 'failedToSubmit' : ''}`}>
            {
                !failedToSubmit ? 
                (
                    <input 
                        className="url-input"
                        type="text" 
                        placeholder="Enter a url..."
                        onKeyPress={(e) => handleEnterKeyPress(e)}
                    />
                ) : (
                    <div className="url-input__submission-err-message">
                        <span>
                            Unable to process that URL. You may manually enter job info or try again
                        </span>
                    </div>
                )
            }
            {/*
            <div className="interaction-icons">
                <span>&#43;</span>
                <span>&#10998;&#10998;</span>
            </div>
            */}
            {/*
            <div
                className="content-editable"
                ref={editableRef}
                contentEditable="true"
                spellCheck="true"
                placeholder="Enter a url..."
                onKeyPress={(e) => handleEnterKeyPress(e)}
            />
            */}
        </div>
    );
};

export default URLInput;
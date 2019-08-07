import React, { useState, useRef } from 'react';

//Styles
import './JobCard.styles.scss';

const JobCard = () => {
    const editableRef = useRef(null);


    const handleEnterKeyPress = e => {
        if (e.key === 'Enter') {
            const url = editableRef.current.innerHTML;
            console.log(`Creating card with url: ${typeof url}`);
        }
    };

    return (
        <div className="job-card">
            <div className="interaction-icons">
                <span>&#43;</span>
                <span>&#10998;&#10998;</span>
            </div>
            <div
                className="content-editable"
                ref={editableRef}
                contentEditable="true"
                spellCheck="true"
                placeholder="Enter a url..."
                onKeyPress={(e) => handleEnterKeyPress(e)}
            />
        </div>
    );
};

export default JobCard;
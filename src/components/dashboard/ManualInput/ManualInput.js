import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../../../actions/jobs';

// Styles
import './ManualInput.styles.scss';

const ManualInput = (props) => {
    // Local state
    const [url, setUrl] = useState('');
    const [company, setCompany] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [img_url, setImgUrl] = useState('');

    const dispatch = useDispatch();

    function resetForm() {
        setUrl('');
        setCompany('');
        setJobTitle('');
        setImgUrl('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(addJob({
            url,
            company,
            job_title,
            img_url
        }));
        
        resetForm();
    };        

    return (
        <div className="manual-input">
            <form 
                className="manual-input__form"
                onSubmit={e => handleSubmit(e)}
            >
                <label className="manual-input__label-group" htmlFor="url">
                    URL:
                    <input 
                        name="url"
                        className="manual-input__input"
                        type="text"
                        placeholder="Job posting url"
                        onChange={e => {setUrl(e.target.value)}}
                        value={url}
                    />
                </label>

                <label className="manual-input__label-group" htmlFor="company">
                    Company:
                    <input 
                        name="company"
                        className="manual-input__input"
                        type="text"
                        placeholder="Company"
                        onChange={e => setCompany(e.target.value)}
                        value={company}
                    />
                </label>

                <label className="manual-input__label-group" htmlFor="job_title">
                    Job Title:
                    <input 
                        name="job_title"
                        className="manual-input__input"
                        type="text"
                        placeholder="Job title"
                        onChange={e => setJobTitle(e.target.value)}
                        value={job_title}
                    />
                </label>

                <label className="manual-input__label-group" htmlFor="img_url">
                    Image URL:
                    <input 
                        name="img_url"
                        className="manual-input__input"
                        type="text"
                        placeholder="Image url"
                        onChange={e => setImgUrl(e.target.value)}
                        value={img_url}
                    />
                </label>

                <input type="submit" value="Create URL" />
            </form>
        </div>
    );
};

export default ManualInput;
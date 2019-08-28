import React, { useState } from 'react';
import CardWrapper from '../CardWrapper';
import URLInput from '../URLInput';
import JobCard from '../JobCard';
import ManualInput from '../ManualInput';

const JobsList = ({ jobs }) => {
    const [freshInputComponentType, setFreshInputComponentType] = useState('url-input');
    const [failedToSubmitUrl, setFailedToSubmitUrl] = useState(false);


    const createFreshUrlInput = () => {

        const renderNewOne = () => {
            const jobs_ul = document.getElementById('jobs-ul');
            const url_input = document.createElement('input');

            // After a short delay, render a new URLInput
            setTimeout(
                jobs_ul.insertBefore(url_input, jobs_ul.childNodes[1]),
                1000
            );
        };

        const handleSubmit = e => {
            e.preventDefault();
            setFreshInputComponentType('manual-input');
            setFailedToSubmitUrl(true);
        };

        const closeManualInput = () => {
            setFreshInputComponentType('url-input');
            setFailedToSubmitUrl(false);
        };

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <CardWrapper
                        childComponentType={freshInputComponentType}
                    >
                        <URLInput failedToSubmit={failedToSubmitUrl} />
                        {
                            freshInputComponentType === 'manual-input' ?
                            (<ManualInput close={closeManualInput} />) : null
                        }
                    </CardWrapper>
                </form>
            </>
        );
    }

    return (
        <ul id="jobs-ul">
            { createFreshUrlInput() }
            { // Create JobCard for each job in JobsList, in reverse order
                jobs.map((job, index) => {
                job = jobs[jobs.length - 1- index]
                return (
                    <CardWrapper childComponentType={'job-card'}>
                        <JobCard 
                            key={index}
                            url={job.url}
                            company={job.company}
                            job_title={job.job_title}
                            user_interest_rating={job.user_interest_rating}
                            user_prospect_rating={job.user_prospect_rating}
                            img_url={job.img_url}
                        />
                    </CardWrapper>
            )
            })}
        </ul>
    );
};

export default JobsList;
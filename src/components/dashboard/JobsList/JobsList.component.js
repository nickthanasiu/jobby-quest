import React from 'react';
import JobCard from '../JobCard';

const JobsList = ({ jobs }) => {
    return (
        <ul>
            { jobs.map(job => (
                <JobCard 
                    url={job.url}
                    company={job.company}
                    job_title={job.job_title}
                    user_interest_rating={job.user_interest_rating}
                    user_prospect_rating={job.user_prospect_rating}
                    img_url={job.img_url}
                />
            ))}
        </ul>
    );
};

export default JobsList;
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import * as actions from '../../../actions/jobs';

// selector functions
//import { getVisibleJobs } from '../../../reducers';

// Presentational component
import JobsList from './JobsList.component';

class JobsListContainer extends Component {
    render() {
        const { jobs } = this.props;
        return (
            <JobsList jobs={jobs} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.filter || 'all';

    return {
        jobs: [{
            url: 'https://angel.co/company/delivermyride/jobs/464988-frontend-engineer',
            company: 'Deliver My Ride',
            job_title: 'Frontend Engineer',
            user_interest_rating: 2,
            user_prospect_rating: 'safety',
            img_url: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/5409226-3d9ced374a8f29a478ff665a6022eb65-medium_jpg.jpg?buster=1520290239'
          },
          {
            url: 'https://angel.co/company/bestowlife/jobs/602914-front-end-software-engineer',
            company: 'Bestow',
            job_title: 'Front End Software Engineer',
            'user_interest_rating': 1,
            'user_prospect_rating': 'ballpark',
            img_url: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/2322139-1dbe86f7af3a553c4ab55a56a060a075-medium_jpg.jpg?buster=1527201265'
          },
          {
            url: 'https://angel.co/company/omnilabs/jobs/598982-senior-frontend-engineer',
            company: 'Omni Labs',
            job_title: 'Senior Frontend Engineer',
            'user_interest_rating': 2,
            'user_prospect_rating': 'reach',
            img_url: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/3244867-2236714ed69a86ce48ec381054bd397e-medium_jpg.jpg?buster=1564609823'
          }
          ]
    };
};

export default connect(mapStateToProps, actions)(JobsListContainer);
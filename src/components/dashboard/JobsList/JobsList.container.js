import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { fetchJobs } from '../../../actions/jobs';

// selector functions
//import { getVisibleJobs } from '../../../reducers';

// Presentational component
import JobsList from './JobsList.component';

class JobsListContainer extends Component {
    componentDidMount() {
      this.props.fetchJobs();
    }

    render() {
        const { jobs } = this.props;
        return (
            <JobsList jobs={jobs} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //const filter = ownProps.filter || 'all';

    return {
      jobs: state.jobs.jobs
    };
};


export default connect(mapStateToProps, { fetchJobs })(JobsListContainer);
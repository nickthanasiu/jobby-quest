import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

import './style.scss';

class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progressPercentage: this.calculateProgressPercentage(this.props.syncErrors)
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.syncErrors !== prevProps.syncErrors) {
            this.setState({
                progressPercentage: this.calculateProgressPercentage(this.props.syncErrors)
            });
        }
    }

    calculateProgressPercentage = (syncErrors) => {
        const syncErrorsCount = Object.keys(syncErrors).length;
        return 1 - (syncErrorsCount / 4);
    }

    render() {
        return (
            <div className="progressbar">
                <div className="progressbar__outer">
                    <div
                        className="progressbar__inner" 
                        style={{ width: `${this.state.progressPercentage * 100}%`}}    
                    />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    syncErrors: getFormSyncErrors('signup')(state),
});

ProgressBar.propTypes = {
    syncErrors: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProgressBar);
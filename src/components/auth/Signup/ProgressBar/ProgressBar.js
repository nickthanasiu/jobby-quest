import React, { Component } from 'react';
import { getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

import './style.scss';

const countSyncErrors = (syncErrors) => {
    return Object.keys(syncErrors).length;
}

class ProgressBar extends Component {
    state = {
        progressPercentage: 1 - (countSyncErrors(this.props.syncErrors) / 4)
    };

    componentDidMount() {
        console.log('Progress props: ', this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.syncErrors !== prevProps.syncErrors) {
            this.setState({
                progressPercentage:  1 - (countSyncErrors(this.props.syncErrors) / 4)
            });
        }
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

export default connect(
    state => ({
        syncErrors: getFormSyncErrors('signup')(state)
    })
)(ProgressBar);
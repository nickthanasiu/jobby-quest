import React, { Component } from 'react';

// Presentational component
import Sidebar from  './SidebarMenu.component';

class SidebarMenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobsExpanded: false
        };
    }

    toggleJobsExpanded = () =>
        this.setState({
            jobsExpanded: !this.state.jobsExpanded
        });
    
    render() {
        return (
            <Sidebar 
                {...this.props}
                {...this.state}
                toggleJobsExpanded={this.toggleJobsExpanded}
            />
        );
    }
}

export default SidebarMenuContainer;
import React, { Component } from 'react';

// Presentational component
import Dashboard from './Dashboard.component';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarMenuVisible: false
        };
    }

    toggleSidebar = () =>
        this.setState({
            sidebarMenuVisible: !this.state.sidebarMenuVisible
        });

    render() {
        const { sidebarMenuVisible } = this.state;
        return (
            <Dashboard 
                sidebarMenuVisible={sidebarMenuVisible}
                toggleSidebar={this.toggleSidebar}
            />
        );
    }
}

export default DashboardContainer;
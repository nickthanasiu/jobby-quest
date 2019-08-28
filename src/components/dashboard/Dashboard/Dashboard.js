import React, { useState } from 'react';

// Components
import URLInput from '../URLInput';
import Navbar from '../Navbar';
import ManualInput from '../ManualInput';
import JobsList from '../JobsList';
import SidebarMenu from '../SidebarMenu';

// Styles
import './Dashboard.styles.scss';

const Dashboard = () => {
    // Local state
    const [sidebarMenuVisible, toggleSidebar] = useState(false);

    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <Navbar toggleSidebar={() => toggleSidebar(!sidebarMenuVisible)} />
            </header>

            <div className={`sidebar-menu-wrapper ${!sidebarMenuVisible ? 'hidden' : '' }`}>
                <SidebarMenu />
            </div>

            <main className={`dashboard__main ${sidebarMenuVisible ? 'sidebar-visible' : ''}`}>
                <JobsList />
            </main>
        </div>
    );
};

export default Dashboard;
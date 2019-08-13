import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';

// Components
import URLInput from '../URLInput';
import JobsList from '../JobsList';
import SidebarMenu from '../SidebarMenu';

// Styles
import './Dashboard.styles.scss';

const Dashboard = ({
    sidebarMenuVisible,
    toggleSidebar
}) => {
    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <div className="dashboard__menu-btn-wrapper" onClick={toggleSidebar}>
                    <MdMenu size={'20px'} />
                </div>
                <h2 className="dashboard__heading">    
                    <span style={{ color: 'black' }}>
                        Jobby
                    </span>
                    <span style={{ color: 'rgb(197, 16, 2)' }}> Quest</span>
                </h2>
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
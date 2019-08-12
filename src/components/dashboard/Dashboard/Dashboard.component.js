import React, { useState } from 'react';

// Components
import URLInput from '../URLInput';
import JobsList from '../JobsList';


// Styles
import './Dashboard.styles.scss';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <h2 className="dashboard__heading">    
                    Dashboard
                </h2>
            </header>

            <main className="dashboard__main">
                <JobsList />
            </main>
        </div>
    );
};

export default Dashboard;
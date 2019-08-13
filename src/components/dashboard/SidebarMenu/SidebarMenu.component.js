import React from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

// Styles
import './SidebarMenu.styles.scss';

const SidebarMenu = ({ jobsExpanded, toggleJobsExpanded }) => {
    const username = 'Demo User';
    return (
        <div className="sidebar-menu">
            <header className="sidebar-menu__header">
                <span className="sidebar-menu__initials">
                    {
                        username
                            .split(' ')
                            .map(word => word.charAt(0)) 
                    }
                </span>
                <span className="sidebar-menu__username">
                    { username }
                </span>
            </header>

            <div className="divider" />

            <div className="sidebar-menu__main">
                <div 
                    className={`
                        sidebar-menu__item
                        ${jobsExpanded ? 'expanded' : ''}
                    `}
                    onClick={toggleJobsExpanded}
                >
                    <div className="sidebar-menu__item-title">
                        <span>Jobs</span>
                        { 
                            !jobsExpanded ?
                                (<MdExpandMore size={'16px'} />) :
                                (<MdExpandLess size={'16px'} />)
                        }
                    </div>

                    <div 
                        className={`
                            jobs-category-items
                            ${jobsExpanded ? 'visible' : ''}
                        `}
                    >
                        <div className="jobs-category-item">
                            Interested in
                        </div>
                        <div className="jobs-category-item">
                            Applied to
                        </div>
                    </div>
                </div>

                <div className="divider" />

                <div className="sidebar-menu__item">
                    Track Progress
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
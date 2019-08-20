import React from 'react';
import { MdMenu, MdExpandMore, } from 'react-icons/md';

// Components
import SearchBar from './SearchBar';

// Styled
import './Navbar.styles.scss';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className="navbar__menu-btn-wrapper" onClick={toggleSidebar}>
                <MdMenu size={'20px'} />
            </div>
            <h2 className="navbar__heading">    
                <span style={{ color: 'black' }}>
                    Jobby
                </span>
                <span style={{ color: 'rgb(197, 16, 2)' }}> Quest</span>
            </h2>

            <div className="navbar__filter-by" style={{ color: 'black', fontWeight: '500' }}>
                Filter by: 
            </div>

            <div className="navbar__filter-by">
                <span>Chances</span>
                <MdExpandMore />
            </div>

            <div className="navbar__filter-by">
                <span>Interest</span>
                <MdExpandMore />
            </div>

            <SearchBar />
        </nav>
    );
};

export default Navbar;
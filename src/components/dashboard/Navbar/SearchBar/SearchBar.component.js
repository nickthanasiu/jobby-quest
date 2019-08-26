import React from 'react';
import { MdSearch } from 'react-icons/md';

// Styles
import './SearchBar.styles.scss';

const SearchBar = () => {
    return (
        <form className="search-bar-wrapper">
            <input 
                type="text"
                className="search-bar" 
                placeholder="Search your jobs"    
            />
            <button type="submit" className="search-btn">
                <MdSearch color="#fff" />
            </button>
        </form>
    );
};

export default SearchBar;
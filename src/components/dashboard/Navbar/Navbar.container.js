import React, { Component } from 'react';

// Presentational component
import Navbar from './Navbar.component';

class NavbarContainer extends Component {
    render() {
        return (
            <Navbar {...this.props} />
        );
    }
}

export default NavbarContainer;
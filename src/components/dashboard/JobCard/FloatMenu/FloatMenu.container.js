import React, { Component } from 'react';

// Presentational component
import FloatMenu from './FloatMenu.component';

class FloatMenuContainer extends Component {

    render() {
        return (
            <FloatMenu 
                {...this.props}
                {...this.state}
            />
        );
    }
}

export default FloatMenuContainer
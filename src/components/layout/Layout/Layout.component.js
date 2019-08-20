import React from 'react';

const Layout = ({ childComponent }) => {
    return (
        <div className="layout-component">
            <div className="child-component">
                { childComponent }
            </div>
        </div>
    );
};

export default Layout;
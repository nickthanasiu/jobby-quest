import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Welcome from './components/welcome/Welcome';



const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App>
                <Router>
                    <Route exact path="/" component={Welcome} />
                </Router>
            </App>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
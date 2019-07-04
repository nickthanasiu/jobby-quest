import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Signup from './components/auth/Signup';



const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App>
                <Router>
                    <Route exact path="/" component={Signup} />
                </Router>
            </App>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
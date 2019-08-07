import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
//import Welcome from './components/welcome/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Dashboard from './components/dashboard/Dashboard';



const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App>
                <Router>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                </Router>
            </App>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
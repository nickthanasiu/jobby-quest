import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import configureStore from './configureStore';

// import global styles
import './styles/main.scss';

ReactDOM.render(
    <Root store={configureStore()} />,
    document.getElementById('root')
);
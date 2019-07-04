import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import configureStore from './configureStore';

ReactDOM.render(
    <Root store={configureStore()} />,
    document.getElementById('root')
);
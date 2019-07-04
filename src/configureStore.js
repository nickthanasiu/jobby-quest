import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Root reducer
import rootReducer from './reducers';

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
};

export default configureStore;
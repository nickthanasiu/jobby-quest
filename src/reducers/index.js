import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
    form: formReducer,
    jobs: jobsReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import jobCardReducers from './jobCard.reducers';

const rootReducer = combineReducers({
    form: formReducer,
    jobCard: jobCardReducers
});

export default rootReducer;
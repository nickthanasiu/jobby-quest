import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
} from '../actions/types';

const initialState = {
    jobs: [],
    jobsLoading: false,
    jobsError: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                jobsLoading: true
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                jobsLoading: false
            };
        case FETCH_JOBS_FAILURE:
            return {
                ...state,
                jobsError: action.payload,
                jobsLoading: false
            }
        default:
            return state;
    }
};
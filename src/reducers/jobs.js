import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    ADD_JOB_REQUEST,
    ADD_JOB_SUCCESS,
    ADD_JOB_FAILURE,
} from '../actions/types';

const initialState = {
    jobs: [],
    jobsLoading: false,
    jobsError: '',
    addJobLoading: false,
    addJobError: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                jobsLoading: true,
                jobsError: '',
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
        case ADD_JOB_REQUEST:
            return {
                ...state,
                addJobLoading: true,
                addJobError: ''
            }
        case ADD_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
                addJobLoading: false
            };
        case ADD_JOB_FAILURE:
            return {
                ...state,
                addJobError: action.payload,
                addJobLoading: false
            };
        default:
            return state;
    }
};
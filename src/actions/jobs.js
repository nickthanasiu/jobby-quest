import axios from 'axios';

import {
    CREATE_CARD_REQUEST,
    CREATE_CARD_FAILURE,
    CREATE_CARD_SUCCESS,
    ADD_JOB_REQUEST,
    ADD_JOB_FAILURE,
    ADD_JOB_SUCCESS,
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_FAILURE,
    FETCH_JOBS_SUCCESS,
} from './types';
import { async } from 'q';
import { fdatasyncSync } from 'fs';

const API_URL = 'localhost:8000/api';

const fetchJobsRequest = () => ({
    type: FETCH_JOBS_REQUEST
});

const fetchJobsSuccess = jobData => ({
    type: FETCH_JOBS_SUCCESS,
    payload: jobData
});

const fetchJobsFailure = err => ({
    type: FETCH_JOBS_FAILURE,
    payload: err,
    error: true
});

export const fetchJobs = () => async dispatch => {
    try {
        dispatch(fetchJobsRequest());

        const response = await axios.get(`http://${API_URL}/jobs`);
        dispatch(fetchJobsSuccess(response.data.jobs));
    } catch (err) {
        dispatch(fetchJobsFailure(err));
    }
}


const createCardRequest = url => ({
    type: CREATE_CARD_REQUEST,
    payload: url
});

const createCardSuccess = cardData => ({
    type: CREATE_CARD_SUCCESS,
    payload: cardData
});

const createCardFailure = err => ({
    type: CREATE_CARD_FAILURE,
    payload: err,
    error: true
});

export const createCard = url => async dispatch => {
    try {
        dispatch(createCardRequest(url));

        const response = await axios.post(`http://${API_URL}/create_card`, { url });
        dispatch(createCardSuccess(response.data));
    } catch (err) {
        dispatch(createCardFailure(err));
    }
};

const addJobRequest = () => ({
    type: ADD_JOB_REQUEST
});

const addJobSuccess = newJob => ({
    type: ADD_JOB_SUCCESS,
    payload: newJob
});

const addJobFailure = (err) => ({
    type: ADD_JOB_FAILURE,
    payload: err,
    error: true
});

export const addJob = ({
    url,
    company,
    job_title,
    img_url
}) => async dispatch => {
    dispatch(addJobRequest());

    axios.post(`http://${API_URL}/jobs/`, { job: {
        url,
        company,
        job_title,
        img_url
    }})
    .then(res => {
        console.log("RES DATA: ", res.data);
        dispatch(addJobSuccess(res.data.newJob));
    })
    .catch(err => {
        dispatch(addJobFailure(err.message || err));
    });
};

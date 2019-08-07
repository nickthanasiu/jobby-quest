import axios from 'axios';

import {
    CREATE_CARD_REQUEST,
    CREATE_CARD_FAILURE,
    CREATE_CARD_SUCCESS,
} from './types';

const createCardRequest = url => ({
    type: CREATE_CARD_REQUEST,
    payload: posts
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
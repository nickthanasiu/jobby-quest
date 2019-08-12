import {
    CREATE_CARD_REQUEST,
    CREATE_CARD_FAILURE,
    CREATE_CARD_SUCCESS,
} from '../actions/types';

const initialState = {
    createCardPending: false,
    createCardUrl: '',
    createCardError: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD_REQUEST:
            return {
                ...state,
                createCardPending: true,
                createCardUrl: action.payload
            };
        default:
            return state;
    }
}
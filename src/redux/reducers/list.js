import { LOAD_CURRENCY_REQUEST, LOAD_CURRENCY_SUCCESS } from '../actions/list'

export default function listReducer(state = { isLoading: false, list: {} }, action) {
    switch (action.type) {
        case LOAD_CURRENCY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_CURRENCY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }
        default: return state;
    }
}
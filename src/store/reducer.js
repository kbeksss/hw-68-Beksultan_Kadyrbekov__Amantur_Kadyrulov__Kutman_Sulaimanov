import {
    ADD,
    DECREASE,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    INCREASE,
    SUBTRACT
} from "./action";

const initialState = {
    count: 4,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREASE:
            return {
                ...state,
                count: state.count - 1
            };
        case ADD:
            return {
                ...state,
                count: state.count + action.value,
            };
        case SUBTRACT:
            return {
                ...state,
                count: state.count - action.value,
            };
        case FETCH_COUNTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COUNTER_SUCCESS:
            return {
                ...state,
                loading: false,
                count: action.counter
            };
        case FETCH_COUNTER_ERROR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;

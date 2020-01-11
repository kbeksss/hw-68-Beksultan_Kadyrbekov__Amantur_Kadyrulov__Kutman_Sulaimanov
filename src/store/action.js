import axiosCount from "../axios-counter";
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const increaseCount = () => {
    return dispatch => {
        dispatch({type: INCREASE});
        dispatch(saveCounter())
    }
};
export const decreaseCount = () => {
    return dispatch => {
        dispatch({type: DECREASE});
        dispatch(saveCounter())
    }
};
export const addToCount = value => {
    return dispatch => {
        dispatch({type: ADD, value});
        dispatch(saveCounter());
    }
};
export const subtractFromCount = value => {
    return dispatch => {
        dispatch({type: SUBTRACT, value});
        dispatch(saveCounter());
    }
};

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST}
};
export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter}
};
export const fetchCounterError = () => {
    return {type: FETCH_COUNTER_ERROR}
};

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosCount.get('counter/count.json').then(response => {
            dispatch(fetchCounterSuccess(response.data))
        }, error => {
            dispatch(fetchCounterError());
            console.error(error);
        });
    }
};
export const saveCounter = () => {
    return (dispatch, getState) => {
        axiosCount.put('counter.json', {count: getState().count}).catch(e => console.log(e));
    }
};

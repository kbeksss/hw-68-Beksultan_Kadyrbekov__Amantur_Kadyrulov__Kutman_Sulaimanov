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
        axiosCount.put('counter.json', {count: getState().count})
            .catch(e => console.error('error happened while saving data', e));
    }
};


export const ADD_TO_DO = 'ADD_TO_DO';
export const DELETE_TO_DO = 'DELETE_TO_DO';

export const addToDo = value => {
    return dispatch => {
        dispatch({type: ADD_TO_DO, value});
        dispatch(saveToDo(value));
    }
};
export const deleteToDo = id => {
    return {type: DELETE_TO_DO, id}
};


export const FETCH_TO_DOS_REQUEST = 'FETCH_TO_DOS_REQUEST';
export const FETCH_TO_DOS_SUCCESS = 'FETCH_TO_DOS_SUCCESS';
export const FETCH_TO_DOS_ERROR = 'FETCH_TO_DOS_ERROR';
export const fetchToDosRequest = () => {
    return {type: FETCH_TO_DOS_REQUEST}
};
export const fetchToDosSuccess = allToDos => {
    return {type: FETCH_TO_DOS_SUCCESS, allToDos}
};
export const fetchToDosError = () => {
    return {type: FETCH_TO_DOS_ERROR}
};
export const fetchToDos = () => {
    return dispatch => {
        dispatch(fetchToDosRequest());
        axiosCount.get('todos.json').then(response => {
            dispatch(fetchToDosSuccess(response.data))
        }, error => {
            dispatch(fetchToDosError());
            console.error(error);
        });
    }
};
export const saveToDo = (value) => {
    return dispatch => {
        axiosCount.post('todos.json', {value})
            .catch(e => console.error('error happened while saving data', e));
    }
};



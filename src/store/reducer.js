import {
    ADD, ADD_TO_DO,
    DECREASE, DELETE_TO_DO, EDIT_TO_DO,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS, FETCH_TO_DOS_ERROR, FETCH_TO_DOS_REQUEST, FETCH_TO_DOS_SUCCESS,
    INCREASE,
    SUBTRACT
} from "./action";
import nanoid from 'nanoid';

const initialState = {
    count: 4,
    loading: false,
    todos: [],
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
        case ADD_TO_DO:
            return {
                ...state,
                todos: [...state.todos, {id: nanoid(), value: action.value}],
            };
        case FETCH_TO_DOS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TO_DOS_SUCCESS:
            let allToDos = Object.keys(action.allToDos).map(todoId => {
                return {value: action.allToDos[todoId].value, id: nanoid()}
            });
            return {
                ...state,
                todos: allToDos,
                loading: false
            };
        case FETCH_TO_DOS_ERROR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;

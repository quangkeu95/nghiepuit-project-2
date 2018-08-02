import * as types from '../constants/ActionTypes';

const initialState = {
    sortType: 1       // a - z
}

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.SORT_TASK:
            return {
                ...state,
                sortType: action.sortType
            };
        default:
            return state;
    }
}
import * as types from '../constants/ActionTypes';

const initialState = {
    filterName: "",
    filterStatus: "all"
}

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.FILTER_NAME_CHANGE:
            return {
                ...state,
                filterName: action.filterName
            };
        case types.FILTER_STATUS_CHANGE:
            return {
                ...state,
                filterStatus: action.filterStatus
            };
        default:
            return state;
    }
}
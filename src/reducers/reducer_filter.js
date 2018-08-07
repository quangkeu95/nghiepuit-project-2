import { handleActions } from 'redux-actions';

const initialState = {
    filterName: "",
    filterStatus: "all"
}

const reducer = handleActions({
    CHANGE_FILTER_NAME: (state, action) => ({
        ...state,
        filterName: action.payload
    }),
    CHANGE_FILTER_STATUS: (state, action) => ({
        ...state,
        filterStatus: action.payload
    })
}, initialState)

export default reducer;
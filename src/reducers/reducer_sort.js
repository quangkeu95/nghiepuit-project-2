import { handleActions } from 'redux-actions';

const initialState = {
    sortType: 1       // a - z
}

const reducer = handleActions({
    SORT_TASK: (state, action) => ({
        ...state,
        sortType: action.payload
    })
}, initialState);

export default reducer;

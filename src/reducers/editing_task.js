import * as types from '../constants/ActionTypes';

const initialState = {
    editFormVisible: false,
    editingTask: {
        id: "",
        name: "",
        status: "active"
    },
    isEdit: false
};

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.OPEN_FORM:
            const newState = {
                editFormVisible: true,
                editingTask: Object.assign({}, action.task),
                isEdit: action.isEdit
            };
            return newState;
        case types.CLOSE_FORM:
            return {
                ...state,
                editFormVisible: false
            }
        case types.ADD_TODO:
            return {
                ...state,
                editFormVisible: false
            }
        default:
            return state;
    }
}
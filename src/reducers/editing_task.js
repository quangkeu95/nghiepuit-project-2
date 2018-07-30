import * as types from '../constants/ActionTypes';

const initialState = {
    editFormVisible: false,
    editingTask: {
        id: "",
        name: "",
        status: "active"
    }
};

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.OPEN_FORM:
            return state;
        default:
            return state;
    }
}
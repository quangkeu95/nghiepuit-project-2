import { handleActions } from 'redux-actions';

const initialState = {
    editFormVisible: false,
    editingTask: {
        id: "",
        name: "",
        status: "active"
    },
    isEdit: false
};

const reducer = handleActions({
    OPEN_FORM: (state, action) => {
        const newState = {
            editFormVisible: true,
            editingTask: Object.assign({}, action.payload.task),
            isEdit: action.payload.isEdit
        };
        return newState;
    },
    CLOSE_FORM: (state, action) => ({
        ...state,
        editFormVisible: false
    }),
    ADD_TODO: (state, action) => ({
        ...state,
        editFormVisible: false
    }),
    EDIT_TODO: (state, action) => ({
        ...state,
        editFormVisible: false
    }),
    CHANGE_CURRENT_NAME: (state, action) => ({
        ...state,
        editingTask: {
            ...state.editingTask,
            name: action.payload
        }
    }),
    CHANGE_CURRENT_STATUS: (state, action) => ({
        ...state,
        editingTask: {
            ...state.editingTask,
            status: action.payload
        }
    })
}, initialState);

export default reducer;

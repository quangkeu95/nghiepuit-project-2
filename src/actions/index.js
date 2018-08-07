import { createActions } from 'redux-actions';

const actions = createActions({
    OPEN_FORM: (isEdit, task) => {
        if (isEdit) {
            return {
                task: task,
                isEdit: isEdit
            }
        } else {
            return {
                task: {
                    id: "",
                    name: "",
                    status: "active"
                },
                isEdit: isEdit
            }
        }
    },
}, 
    'ADD_TODO',
    'EDIT_TODO',
    'DELETE_TODO',
    'CHANGE_CURRENT_NAME',
    'CHANGE_CURRENT_STATUS',
    'CHANGE_FILTER_NAME',
    'CHANGE_FILTER_STATUS',
    'SORT_TASK',
    'CLOSE_FORM'
);

export default actions;

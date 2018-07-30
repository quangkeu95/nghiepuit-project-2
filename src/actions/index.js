import * as types from '../constants/ActionTypes';

export function listAll() {
    return {
        type: types.LIST_ALL
    }
}

export function addToDo(task) {
    return {
        type: types.ADD_TODO,
        task: task
    }
}

export function openForm(isEdit, task) {
    if (isEdit) {
        return {
            type: types.OPEN_FORM,
            task: task
        }
    } else {
        return {
            type: types.OPEN_FORM,
            task: {
                id: "",
                name: "",
                status: "active"
            }
        }
    }
}
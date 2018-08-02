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

export function editToDo(task) {
    return {
        type: types.EDIT_TODO,
        task: task
    }
}

export function deleteToDo(task) {
    return {
        type: types.DELETE_TODO,
        task: task
    }
}

export function currentNameChange(name) {
    return {
        type: types.CURRENT_NAME_CHANGE,
        name: name
    }
}

export function currentStatusChange(status) {
    return {
        type: types.CURRENT_STATUS_CHANGE,
        status: status
    }
}

export function onFilter(event) {
    if (event.target.name === 'filterName') {
        const filterName = event.target.value;
        return {
            type: types.FILTER_NAME_CHANGE,
            filterName: filterName
        }
    } else if (event.target.name === 'filterStatus') {
        const filterStatus = event.target.value;
        return {
            type: types.FILTER_STATUS_CHANGE,
            filterStatus: filterStatus
        }
    }
}

export function onSort(sortType) {
    return {
        type: types.SORT_TASK,
        sortType: sortType
    }
}

export function openForm(isEdit, task) {
    if (isEdit) {
        return {
            type: types.OPEN_FORM,
            task: task,
            isEdit: isEdit
        }
    } else {
        return {
            type: types.OPEN_FORM,
            task: {
                id: "",
                name: "",
                status: "active"
            },
            isEdit: isEdit
        }
    }
}

export function closeForm() {
    return {
        type: types.CLOSE_FORM
    }
}
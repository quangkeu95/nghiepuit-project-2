import uuidv4 from 'uuid';
import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem("toDoList"));

const initialState = data ? data : [];

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TODO:
            const task = {
                id: uuidv4(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(task);
            localStorage.setItem("toDoList", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
import uuidv4 from 'uuid';
import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem("toDoList"));

const initialState = data ? data : [];

export default function myReducer(state=initialState, action) {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TODO: {
            const task = {
                id: uuidv4(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(task);
            localStorage.setItem("toDoList", JSON.stringify(state));
            return [...state];
        }
        case types.EDIT_TODO: {
            const task = action.task;
            const newState = state.map(item => {
                if (item.id === task.id) {
                    return task;
                };
                return item;
            });
            return newState;
        } 
        case types.DELETE_TODO: {
            const task = action.task;
            const target = state.filter(item => item.id === task.id)[0];
            if (target) {
                const targetIndex = state.indexOf(target);
                const newState = [
                    ...state.slice(0, targetIndex),
                    ...state.slice(targetIndex + 1)
                ]
                localStorage.setItem("toDoList", JSON.stringify(newState));                                
                return newState;
            }
            return state;
        }    
        default:
            return state;
    }
}
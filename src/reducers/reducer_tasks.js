import uuidv4 from 'uuid';
import { handleActions } from 'redux-actions';

const data = JSON.parse(localStorage.getItem("toDoList"));

const initialState = data ? data : [];

const reducer = handleActions({
    ADD_TODO: (state, action) => {
        const task = {
            id: uuidv4(),
            name: action.payload.name,
            status: action.payload.status
        }
        state.push(task);
        localStorage.setItem("toDoList", JSON.stringify(state));
        return [...state];
    },
    EDIT_TODO: (state, action) => {
        const task = action.payload;        
        const newState = state.map(item => {
            if (item.id === task.id) {
                return task;
            };
            return item;
        });
        localStorage.setItem("toDoList", JSON.stringify(newState));        
        return newState;
    },
    DELETE_TODO: (state, action) => {
        const task = action.payload;
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
}, initialState);

export default reducer;

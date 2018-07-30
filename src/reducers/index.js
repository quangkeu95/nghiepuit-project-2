import { combineReducers } from 'redux';
import tasks from './tasks';
import editing from './editing_task';

const rootReducer = combineReducers({
    tasks,
    editing
});

export default rootReducer;
import { combineReducers } from 'redux';
import tasks from './reducer_tasks';
import editing from './reducer_editing_task';
import filter from './reducer_filter';
import sort from './reducer_sort';

const rootReducer = combineReducers({
    tasks,
    editing,
    filter,
    sort
});

export default rootReducer;
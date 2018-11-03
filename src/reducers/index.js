import { combineReducers } from 'redux';

import ToDoReducer from './ToDoReducer.js';

const allReducers = combineReducers({
    toDoItems: ToDoReducer
});

export default allReducers
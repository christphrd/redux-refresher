import { combineReducers } from 'redux';

import ToDoReducer from './ToDoReducer.js';

export default combineReducers({
    toDoItems: ToDoReducer
});
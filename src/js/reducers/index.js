import { combineReducers } from 'redux'

import todosReducer from './todosReducer.js';
import visibilityFilterReducer from './visibilityFilterReducer.js';

const myReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export default myReducer
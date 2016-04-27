import uuid from 'node-uuid';

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text: text,
    id: uuid.v4(),
    completed: false
  };
}

export const toggleTodo = (id) => {
 return {
    type: "TOGGLE_TODO",
    id
  };
}

export const setVisitbilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
}
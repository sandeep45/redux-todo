import expect, { createSpy, spyOn, isSpy } from 'expect'

const todosReducer = (state=[], action) => {

  switch(action.type){
    case "ADD_TODO":
      return [...state, {
        id: action.id,
        text: action.text,
        completed: action.completed
      }]

    case "TOGGLE_TODO":
      state = state.map( (todo) => {
        if(todo.id == action.id){
          return { ...todo, completed: true}
        }else{
          return todo
        }
      })
      return state;

    default:
      return state;
  }

}

expect(1).toBe(1);

import {addTodo , toggleTodo, setVisitbilityFilter} from '../actions/index.js'

expect(todosReducer([], addTodo("hi"))).toBeA(Array);
expect(todosReducer([], addTodo("hi")).length).toBe(1);
expect(todosReducer([], addTodo("hi"))[0].completed).toBe(false);

expect(todosReducer([{text:"a", completed: false, id:1}], toggleTodo(1))[0].completed).toBe(true);

export default todosReducer;
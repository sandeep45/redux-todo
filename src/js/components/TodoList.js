import React, { PropTypes } from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {

  const {todos, onTodoClick} = props;
  return(
    <ul>
      {todos.map( (todo) => {
        return (
          <Todo key={todo.id}
            onClick={ (evt) => {onTodoClick(todo.id)} }
            completed={todo.completed}
            text={todo.text}
          />
        );
      })}
    </ul>
  );
};

TodoList.proptypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList
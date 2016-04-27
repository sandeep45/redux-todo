import { connect } from 'react-redux'

import { toggleTodo, addTodo } from '../actions'
import TodoList from '../components/TodoList.js';

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter( (todo) => todo.completed == true)
    case "SHOW_ACTIVE":
      return todos.filter( (todo) => todo.completed == false)
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps, mapDispatchToProps
)(TodoList);

export default VisibleTodoList;



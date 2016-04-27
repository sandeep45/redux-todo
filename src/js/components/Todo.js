import React, { PropTypes } from 'react';

const Todo = (props) => {

  const {text, onClick, completed} = props;

  return (
    <li onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;


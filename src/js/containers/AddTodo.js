import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../actions'

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({dispatch: dispatch});


let AddTodo = (props) => {
  let input;
  const { dispatch } = props;
  return (
    <form class="form" onSubmit={ (e) => {
          e.preventDefault();
          dispatch(addTodo(input.value));
          input.value="";
        }
      }
    >
      <input type="text" placeholder="Type Todo Here"
        ref={ (e) => {input = e} }
      />
      <input type="submit" class="btn" value="Submit" />
    </form>
  );
}

AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodo;
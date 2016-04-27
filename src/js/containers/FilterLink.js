import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, addTodo, setVisitbilityFilter } from '../actions'
import Link from '../components/Link.js';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter == ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisitbilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default FilterLink;
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myReducer from './reducers'
import App from './components/App'
import { toggleTodo, addTodo, setVisitbilityFilter } from './actions'

let store = createStore(myReducer)
window.store = store;

store.dispatch(addTodo("yo"));
store.dispatch(addTodo("yo yo"));
store.dispatch(addTodo("yo yo honey singh"));
store.dispatch(addTodo("kiddan"));

// store.dispatch(setVisitbilityFilter("SHOW_ACTIVE"))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
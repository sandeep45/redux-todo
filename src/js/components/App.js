import React from 'react';
import Link from './Link.js';

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList.js";
import Footer from "./Footer";

const App = (props) => {
  return(
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
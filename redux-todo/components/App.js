import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibilityTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;

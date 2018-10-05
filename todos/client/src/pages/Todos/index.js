import React, { Component, Fragment } from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoAdder />
        <TodoList />
      </Fragment>
    );
  }
}

export default App;

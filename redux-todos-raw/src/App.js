import React, { Fragment } from 'react';
import TodoAdder from './containers/TodoAdder';
import TodoList from './containers/TodoList';

export default () => (
  <Fragment>
    <TodoAdder />
    <TodoList />
  </Fragment>
);

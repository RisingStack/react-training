import React, { Fragment } from 'react';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';
import { observer, inject } from 'mobx-react';

const App = observer(({ store }) => (
  <Fragment>
    {store.isLoading && 'Loading!'}
    <TodoAdder />
    <TodoList />
  </Fragment>
));

export default inject('store')(App);

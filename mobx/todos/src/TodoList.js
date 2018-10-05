import React from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from './TodoItem';

const TodoList = observer(({ store }) => (
  <ul>{store.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>
));

export default inject('store')(TodoList);

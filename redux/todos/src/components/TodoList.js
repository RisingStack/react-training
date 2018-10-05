import React from 'react';
import TodoItem from '../containers/TodoItem';

export default ({ todos }) => (
  <ul>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>
);

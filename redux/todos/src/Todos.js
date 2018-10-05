import React from 'react';

export default ({ todos, addTodo }) => (
  <div>
    <h3>Todos</h3>
    <input onBlur={addTodo} />
    <ul>{todos.map(todo => <li>{todo.text}</li>)}</ul>
  </div>
);

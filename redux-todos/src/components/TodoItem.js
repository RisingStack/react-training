import React from 'react';

export default ({ todo, removeTodo }) => (
  <li>
    <strong> {todo.title}: </strong>
    <span> {todo.description} </span>
    <strong onClick={removeTodo}> X </strong>
  </li>
);

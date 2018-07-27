import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={this.routeToTodo}>
            {todo.title}
          </li>
        ))}
      </ul>
    );
  }
}

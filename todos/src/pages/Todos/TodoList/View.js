import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <Fragment>
        <h1 id="test-todos-title">Todos</h1>
        <ul id="test-todos-list">
          {todos.map(todo => (
            <li key={todo.id} onClick={this.routeToTodo}>
              <Link to={`/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

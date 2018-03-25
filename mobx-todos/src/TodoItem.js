import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class TodoItem extends Component {
  removeTodo = () => {
    const { store, todo } = this.props;
    store.removeTodo(todo);
  };

  render() {
    const { todo, store } = this.props;

    return (
      <li>
        <strong> {todo.title}: </strong>
        <span> {todo.description} </span>
        <strong onClick={this.removeTodo}> X </strong>
      </li>
    );
  }
}

TodoItem = observer(TodoItem);
export default inject('store')(TodoItem);

import React, { Component } from 'react';

export default class TodoPage extends Component {
  componentDidMount() {
    const { match, getTodo } = this.props;
    getTodo(match.params.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
    );
  }
}

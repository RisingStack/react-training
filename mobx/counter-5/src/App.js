import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
export default class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <p>The value is: {counter.value}</p>
        <button onClick={counter.increment}>Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
      </div>
    );
  }
}

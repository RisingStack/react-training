import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observable
export default class App {
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

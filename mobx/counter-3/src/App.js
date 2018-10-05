import React from 'react';
import { observer, inject } from 'mobx-react';

const App = observer(({ counter }) => (
  <div>
    <p>The value is: {counter.value}</p>
    <button onClick={counter.increment}>Increment</button>
    <button onClick={counter.decrement}>Decrement</button>
  </div>
));

export default inject('counter')(App);

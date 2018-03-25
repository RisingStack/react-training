import React from 'react';

export default ({ value, increment, decrement }) => (
  <div>
    <p>The current value is: {value}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

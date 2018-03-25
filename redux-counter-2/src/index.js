import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './Counter';
import reducer from './reducers';
import { increment, decrement } from './actions';

const store = createStore(reducer, 0);

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      increment={() => store.dispatch(increment(2))}
      decrement={() => store.dispatch(decrement(3))}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CounterContainer from './CounterContainer';

const store = createStore(reducer, 0);

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action, decorate } from 'mobx';
import { Provider } from 'mobx-react';
import App from './App';

class Counter {
  value = 0;
  increment() {
    this.value++;
  }
  decrement() {
    this.value--;
  }
}

decorate(Counter, {
  value: observable,
  increment: action.bound,
  decrement: action.bound
});

const counter = new Counter();

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
);

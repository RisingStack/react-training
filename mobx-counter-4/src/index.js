import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { Provider } from 'mobx-react';
import App from './App';

class Counter {
  @observable value = 0;
  @action.bound
  increment() {
    this.value++;
  }
  @action.bound
  decrement() {
    this.value--;
  }
}

const counter = new Counter();

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
);

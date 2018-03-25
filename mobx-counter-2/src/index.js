import React from 'react';
import ReactDOM from 'react-dom';
import { autorun, observable, action, decorate } from 'mobx';
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

function render() {
  ReactDOM.render(
    <App
      value={counter.value}
      increment={counter.increment}
      decrement={counter.decrement}
    />,
    document.getElementById('root')
  );
}

autorun(render);

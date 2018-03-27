import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Consumer } from './index';

class Dummy extends Component {
  render() {
    throw new Error('I am a big error')
    return <Consumer>{val => <div>Value is {val}</div>}</Consumer>;
  }
}

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count, error } = this.state;

    if (error) {
      return <div>ERROR!!</div>;
    }

    return (
      <div className="App">
        <Dummy />
        <Consumer>{val => <div>Value is {val}</div>}</Consumer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Error: {error}</h1>
        </header>
        <p className="App-intro">The counter is at: {count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;

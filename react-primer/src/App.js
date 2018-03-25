import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">The counter is at: {count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;

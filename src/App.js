import React, { Component } from 'react';
import CurrencyList from './components/CurrencyList';
import './style/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Currency Viewer</h1>
        </header>
        <div>
          <CurrencyList />
        </div>
      </div>
    );
  }
}

export default App;

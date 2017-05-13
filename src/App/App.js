import React, { Component } from 'react';
import Header from './Header'
import ListView from './ListView'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListView />
        <div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

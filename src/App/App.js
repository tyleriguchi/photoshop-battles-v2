import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import request from 'axios'

import { formatData } from './utils'

import Header from './Header'
import ListView from './ListView'
import ListItem from './ListItem'

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            children={ ({ match, ...rest } ) => (
              <div>
                {match && <ListView {...rest}/>}
              </div>
            )}
          />
          <Route path='/:id' component={ListItem} />
        </div>
      </Router>
    );
  }
}

export default App;

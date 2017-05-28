import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import request from 'axios'

import { formatData } from './utils'

import Header from './Header'
import ListView from './ListView'
import ListItem from './ListItem'
import CommentList from './CommentList'

import { fetchPosts } from '../data/posts'

import './App.scss';

class App extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props

    fetchPosts()
  }

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
        <Route path='/:id' component={CommentList} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect((state) => state, mapDispatchToProps)(App);

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './ListView.css'

import request from 'axios'

import ListItem from '../ListItem'

export class ListView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    request(`https://www.reddit.com/r/photoshopbattles.json`).then( ({data}) => {
      this.setState({
        posts: data.data.children
      })
    })
  }

  render() {
    return (
      <ul className='list-view'>
        {this.state.posts.map( post => (
          <ListItem key={post.data.id} title={post.data.title} thumbnail={post.data.thumbnail} />
        ))}
      </ul>
    )
  }
}

export default ListView

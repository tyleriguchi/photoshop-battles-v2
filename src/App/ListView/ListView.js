import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './ListView.css'

import FlipMove from 'react-flip-move';

import ListItem from '../ListItem'

export class ListView extends Component {

  renderItems() {
    const { posts, location: { pathname } } = this.props
    console.log('path', pathname)

    if (pathname === '/') {
      const list = posts.map( post => (
        <ListItem
          key={post.data.id}
          linkTo={`/${post.data.id}`}
          title={post.data.title}
          thumbnail={post.data.thumbnail}
        />
      ))
      console.log('lst', list)
      return list
    }
    else {
      const matchingPost = posts.find( post => post.data.id === pathname.substring(1))

      if (!matchingPost) return null
      console.log(matchingPost)
      return (
          <ListItem
            key={matchingPost.data.id}
            linkTo={`/${matchingPost.data.id}`}
            title={matchingPost.data.title}
            thumbnail={matchingPost.data.thumbnail}
          />
      )
    }
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <ul className='list-view'>
          <FlipMove duration={750} easing="ease-out">
            {this.renderItems()}
          </FlipMove>
        </ul>
      </div>
    )
  }
}

export default ListView

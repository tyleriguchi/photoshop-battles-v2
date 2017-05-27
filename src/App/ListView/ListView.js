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
          key={post.id}
          linkTo={`/${post.id}`}
          title={post.title}
          thumbnail={post.thumbnail}
        />
      ))
      console.log('lst', list)
      return list
    }
    else {
      const matchingPost = posts.find( post => post.id === pathname.substring(1))

      if (!matchingPost) return null
      console.log(matchingPost)
      return (
          <ListItem
            key={matchingPost.id}
            linkTo={`/${matchingPost.id}`}
            title={matchingPost.title}
            thumbnail={matchingPost.thumbnail}
          />
      )
    }
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <ul className='list-view'>
          {/*<FlipMove duration={750} easing="ease-out">*/}
            {this.renderItems()}
          {/*</FlipMove>*/}
        </ul>
      </div>
    )
  }
}

export default ListView

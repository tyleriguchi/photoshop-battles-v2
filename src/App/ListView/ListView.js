import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FlipMove from 'react-flip-move';

import './ListView.css'

// import { requestPosts } from '../data/posts'
import { getPosts } from '../../data/posts'

import ListItem from '../ListItem'

export class ListView extends Component {
  hasMatch(posts, pathname) {
    return posts.find( post => post.id === pathname.substring(1))
  }
  
  renderItems() {
    const { posts, location: { pathname } } = this.props

    if (pathname === '/') {
      const list = posts.map( post => (
        <ListItem
          key={post.id}
          linkTo={`/${post.id}`}
          title={post.title}
          thumbnail={post.thumbnail}
        />
      ))
      return list
    }
    else {
      const matchingPost = this.hasMatch(posts, pathname)

      if (!matchingPost) return null

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

const mapStateToProps = (state) => ({
  posts: getPosts(state)
})

export default connect(mapStateToProps)(ListView)

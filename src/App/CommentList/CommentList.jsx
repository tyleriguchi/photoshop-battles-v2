import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import ListItem from '../ListItem'

import { fetchComments } from '../../data/comments'

import { getComments } from '../../data/comments'

export class CommentList extends PureComponent {
  async componentDidMount() {
    const { location: {pathname} } = this.props

    const id = pathname.substring(1)

    await fetchComments(id)
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        <ul>
          {comments.map( comment => (
            <ListItem
              key={comment.id}
              linkTo={`/${comment.id}`}
              title={comment.title}
              thumbnail={comment.thumbnail}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.location.pathname.substring(1))
})

const mapDispatchToProps = {
  fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)

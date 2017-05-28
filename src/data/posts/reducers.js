import { combineReducers } from 'redux'

const initialPostIdState = []

const ids = (state = initialPostIdState, action) => {
  switch (action.type) {
    case "RECEIVED_POSTS": {
      return [...state, ...action.posts.map( post => post.id)]
    }

    default: {
      return state
    }
  }
}

const initialPosts = {}

const byId = (state = initialPosts, action) => {
  switch (action.type) {
    case "POSTS_REQUESTED": {
      return state
    }
    case "RECEIVED_POSTS": {
      const posts = action.posts.reduce( (acc, post) => {
        acc[post.id] = post
        return acc
      }, {})
      console.log('received', action.posts)
      return {
        ...state,
        ...posts
      }
    }

    default: {
      return state
    }
  }
}

export {ids}
export {byId}

export default combineReducers({
  byId,
  ids
})

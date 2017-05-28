import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case "RECEIVED_COMMENTS": {
      return [...state, ...action.comments.map( comment => comment.id)]
    }

    default: {
      return state
    }
  }
}

const initialPosts = {}

const byId = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVED_COMMENTS": {
      const comments = action.comments.reduce( (acc, comment) => {
        acc[comment.id] = comment
        return acc
      }, {})

      return {
        ...state,
        ...comments
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

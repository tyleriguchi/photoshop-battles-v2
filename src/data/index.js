import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { posts, postSagas as sagas } from './posts'

import { comments, commentSagas } from './comments'

const reducers = combineReducers({
  posts,
  comments,
})

export {reducers}

// const sagas = function*() {
//   return yield all([
//     postSagas,
//     commentSagas
//   ])
// }

export {sagas}

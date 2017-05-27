import { combineReducers } from 'redux'

import { postsReducer } from './posts'

const reducers = combineReducers(
  postsReducer
)

export {reducers}

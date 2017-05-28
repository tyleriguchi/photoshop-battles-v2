import { combineReducers } from 'redux'

import { posts, sagas } from './posts'

console.log('posts', posts)
const reducers = combineReducers({
  posts
})

export {reducers}
export {sagas}

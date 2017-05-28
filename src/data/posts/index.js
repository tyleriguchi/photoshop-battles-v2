// import { requestPosts } from './actions'
import { combineReducers } from 'redux'
import sagas from './sagas'
import {getPosts} from './selectors'
import posts from './reducer'

// export {requestPosts}

//reducers
// const posts = {
//   byId,
//   ids
// }

export {posts}

//sagas
export {sagas}

//selectors
export {getPosts}

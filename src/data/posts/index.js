// import { requestPosts } from './actions'

import {fetchPosts} from './actions'
import postSagas from './sagas'
import {getPosts} from './selectors'
import posts from './reducers'

//actions
export {fetchPosts}

//reducers
export {posts}

//sagas
export {postSagas}

//selectors
export {getPosts}

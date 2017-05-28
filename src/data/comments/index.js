import { combineReducers } from 'redux'

import { fetchComments } from './actions'
import commentSagas from './sagas'
import comments from './reducers'
import { getComments } from './selectors'

//actions
export {fetchComments}
//reducers
export {comments}

//sagas
export {commentSagas}

//selectors
export {getComments}

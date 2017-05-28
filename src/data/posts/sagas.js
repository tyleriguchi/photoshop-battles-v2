import { call, put, takeEvery, all } from 'redux-saga/effects'

export function fetchPostsApi() {
    return fetch(`http://www.reddit.com/r/photoshopbattles.json` )
      .then(response => response.json() )
      .then(json => json.data.children.map(child => child.data) )
}

export function* requestPosts() {
  yield put({type: 'REQUEST_POSTS'})
  const posts = yield call(fetchPostsApi)
  yield put({ type: 'RECEIVED_POSTS', posts })
}
// dont auto boot it
export default function* rootPostsSaga() {
  yield all([
    requestPosts()
  ])
}

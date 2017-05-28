import { call, fork, put, takeLatest, all } from 'redux-saga/effects'

export function fetchPostsApi() {
    return fetch(`http://www.reddit.com/r/photoshopbattles.json` )
      .then(response => response.json() )
      .then(json => json.data.children.map(child => child.data) )
}

export function* requestPosts() {
  yield put({type: 'REQUEST_POSTS'})
  const posts = yield call(fetchPostsApi)
  console.log('yeilded posts', posts)
  yield put({ type: 'RECEIVED_POSTS', posts })
}

export default function* postSagas() {
  yield takeLatest('POSTS_REQUESTED', requestPosts)
}

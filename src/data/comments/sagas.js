import { call, put, takeEvery, all } from 'redux-saga/effects'

export function fetchCommentsApi(postId) {
    return fetch(`http://www.reddit.com/r/photoshopbattles/${postId}.json` )
      .then(response => response.json() )
      .then(json => json.data.children.map(child => child.data) )
}

export function* requestComments(postId) {
  yield put({type: 'REQUEST_COMMENTS'})
  const comments = yield call(fetchCommentsApi(postId))
  yield put({ type: 'RECEIVED_COMMENTS', comments })
}

export default function* commentSagas() {
  yield takeEvery('COMMENTS_REQUESTED', requestComments)
}

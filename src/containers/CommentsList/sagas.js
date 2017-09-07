import { put, takeLatest, fork, call } from 'redux-saga/effects'

import * as Types from './constants'

import { getPostComments } from '../../api/videoApi'

function* handleLoadPostComments(action) {
    const { postId, nextUrl } = action.payload
    const response = yield call(getPostComments, nextUrl)
    yield put({ type: Types.Fetch_POST_COMMENTS_SUCCESS, payload: response, postId: postId  })
}

function* loadPostCommentsSaga() {
    yield takeLatest(Types.Fetch_POST_COMMENTS, handleLoadPostComments)
}

export { loadPostCommentsSaga }
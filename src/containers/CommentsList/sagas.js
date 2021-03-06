import { put, takeLatest, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as Types from './constants'

import { getPostComments } from '../../api/VideoApi'

function* handleLoadPostComments(action) {
    const { postId, nextUrl } = action.payload
    const response = yield call(getPostComments, nextUrl)
    yield delay(1000)
    yield put({ type: Types.Fetch_POST_COMMENTS_SUCCESS, payload: response, postId: postId })
}

function* loadPostCommentsSaga() {
    yield takeLatest(Types.Fetch_POST_COMMENTS, handleLoadPostComments)
}

function* handleLoadCommentReplies(action) {
    const { commentId, nextUrl } = action.payload
    const response = yield call(getPostComments, nextUrl)
    yield delay(1000)
    yield put({ type: Types.Fetch_COMMENT_REPLIES_SUCCESS, payload: response, commentId: commentId })
}

function* loadCommentRepliesSaga() {
    yield takeLatest(Types.Fetch_COMMENT_REPLIES, handleLoadCommentReplies)
}

export { loadPostCommentsSaga, loadCommentRepliesSaga }
import { put, takeLatest, call } from 'redux-saga/effects'

import { LIKE_COMMENT, LIKE_COMMENT_SUCCESS, UNLIKE_COMMENT, UNLIKE_COMMENT_SUCCESS } from './constants'

import { toggleCommentLike } from '../../api'

function* handleCommentLike(action) {
    const response = yield call(toggleCommentLike, action.payload.commentId, true)
    yield put({ type: LIKE_COMMENT_SUCCESS, payload: response })
}

function* likeCommentSaga() {
    yield takeLatest(LIKE_COMMENT, handleCommentLike)
}

function* handleCommentUnlike(action) {
    const response = yield call(toggleCommentLike, action.payload.commentId, false)
    yield put({ type: UNLIKE_COMMENT_SUCCESS, payload: response })
}

function* unlikeCommentSaga() {
    yield takeLatest(UNLIKE_COMMENT, handleCommentUnlike)
}

export { likeCommentSaga, unlikeCommentSaga }
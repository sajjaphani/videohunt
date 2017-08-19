import { put, takeLatest, fork, call } from 'redux-saga/effects'

import { LIKE_COMMENT, LIKE_COMMENT_SUCCESS, UNLIKE_COMMENT, UNLIKE_COMMENT_SUCCESS } from './constants'

function* handleCommentLike(action) {
    // const comment = yield call(postComment, action.comment.postId, action.comment.text)
    yield put({ type: LIKE_COMMENT_SUCCESS, payload: action.payload })
}

function* likeCommentSaga() {
    yield takeLatest(LIKE_COMMENT, handleCommentLike)
}

function* handleCommentUnlike(action) {
    // const comment = yield call(postComment, action.comment.postId, action.comment.text)
    yield put({ type: UNLIKE_COMMENT_SUCCESS, payload: action.payload })
}

function* unlikeCommentSaga() {
    yield takeLatest(UNLIKE_COMMENT, handleCommentUnlike)
}


export { likeCommentSaga, unlikeCommentSaga }
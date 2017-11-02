import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { ADD_POST_COMMENT, ADD_POST_COMMENT_SUCCESS, ADD_COMMENT_REPLY, ADD_COMMENT_REPLY_SUCCESS } from './constants'

import { postComment, postReply } from '../../api/VideoApi'

function* handlePostCommentAction(action) {
    const comment = yield call(postComment, action.comment.postId, action.comment.text)
    yield put({ type: ADD_POST_COMMENT_SUCCESS, payload: comment })
}

function* postCommentSaga() {
    yield takeLatest(ADD_POST_COMMENT, handlePostCommentAction)
}

function* handleCommentReply(action) {
    const comment = yield call(postReply, action.comment)
    yield put({ type: ADD_COMMENT_REPLY_SUCCESS, payload: comment })
}

function* commentReplySaga() {
    yield takeLatest(ADD_COMMENT_REPLY, handleCommentReply)
}

export { postCommentSaga, commentReplySaga }
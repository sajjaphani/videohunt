import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { ADD_POST_COMMENT, ADD_POST_COMMENT_SUCCESS } from './constants'

import { postComment } from '../../api/videoApi';

function* handlePostCommentAction(action) {
    console.log('Action', action)
    const comment = yield call(postComment, action.comment.postId, action.comment.text)
    console.log('Cmnt', comment)
    yield put({ type: ADD_POST_COMMENT_SUCCESS, payload: comment })
}

function* postCommentSaga() {
    yield takeLatest(ADD_POST_COMMENT, handlePostCommentAction)
}

export { postCommentSaga }
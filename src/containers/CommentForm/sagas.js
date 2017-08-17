import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { ADD_POST_COMMENT, ADD_POST_COMMENT_SUCCESS, ADD_COMMENT_REPLY, ADD_COMMENT_REPLY_SUCCESS } from './constants'

import { postComment, postReply } from '../../api/videoApi';

function* handlePostCommentAction(action) {
    const comment = yield call(postComment, action.comment.postId, action.comment.text)
    yield put({ type: ADD_POST_COMMENT_SUCCESS, payload: comment })
}

function* postCommentSaga() {
    yield takeLatest(ADD_POST_COMMENT, handlePostCommentAction)
}

function* handleCommentReply(action) {
    //const comment = yield call(postReply, action.comment)
    // This transformation will not be needed once we tie the actual rest call
    let transformedComment = action.comment
    // the comment id of new comment will ideally be returned by rest call
    transformedComment.commentId = new Date().toISOString()
    transformedComment.content = transformedComment.text
    transformedComment.likes = {
        "data": [
        ],
        "summary": {
            "count": 0,
            "can_like": true,
            "has_liked": true
        }
    }
    transformedComment.replies = {
        "data": [],
        "summary": {
            "count": 0,
            "can_comment": true
        }
    }

    yield put({ type: ADD_COMMENT_REPLY_SUCCESS, payload: action.comment })
}

function* commentReplySaga() {
    yield takeLatest(ADD_COMMENT_REPLY, handleCommentReply)
}

export { postCommentSaga, commentReplySaga }
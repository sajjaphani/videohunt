import { put, takeLatest, fork, call } from 'redux-saga/effects'

import { LIKE_COMMENT, LIKE_COMMENT_SUCCESS, UNLIKE_COMMENT, UNLIKE_COMMENT_SUCCESS, SHOW_REPLIES, SHOW_REPLIES_SUCCESS } from './constants'

import { getCommentReplies } from '../../api/videoApi'

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

function* handleFetchCommentReplies(action) {
    console.log('Action', action)
    const comments = yield call(getCommentReplies, action.payload.commentId)
    console.log('comments', comments)
    yield put({ type: SHOW_REPLIES_SUCCESS, payload: {commentId:action.payload.commentId, comments:comments }})
}

function* fetchCommentReplies() {
    yield takeLatest(SHOW_REPLIES, handleFetchCommentReplies)
}

export { fetchCommentReplies, likeCommentSaga, unlikeCommentSaga }
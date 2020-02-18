import { put, takeLatest, call } from 'redux-saga/effects'

import { LIKE_POST, LIKE_POST_SUCCESS, UNLIKE_POST, UNLIKE_POST_SUCCESS } from './constants'
import { togglePostLike } from '../../api';

function* handleLikeVideoAction(action) {
    const data = yield call(togglePostLike, action.payload.postId, true)
    yield put({ type: LIKE_POST_SUCCESS, payload: data })
}

function* handleUnlikeVideoAction(action) {
    const data = yield call(togglePostLike, action.payload.postId, false)
    yield put({ type: UNLIKE_POST_SUCCESS, payload: data })
}

function* likePostSaga() {
    yield takeLatest(LIKE_POST, handleLikeVideoAction)
}

function* unlikePostSaga() {
    yield takeLatest(UNLIKE_POST, handleUnlikeVideoAction)
}

export { likePostSaga, unlikePostSaga }

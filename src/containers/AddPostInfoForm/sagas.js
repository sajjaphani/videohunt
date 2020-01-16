import { put, call, takeLatest } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
import { push } from 'react-router-redux'

import { ADD_NEW_VIDEO, ADD_NEW_VIDEO_SUCCESS, ADD_NEW_VIDEO_REDIRECT } from './constants'

import { postVideo } from '../../api/VideoApi';

function* addNewVideoAction(action) {
    const post = yield call(postVideo, action.payload);
    yield put({ type: ADD_NEW_VIDEO_SUCCESS, payload: post });
    yield put(push('/'))
}

function* addNewVideoSaga() {
    yield takeLatest(ADD_NEW_VIDEO, addNewVideoAction)
}

function* redirectToFirstPageAction(action) {
    yield put(push('/posts/new'))
}

function* redirectToFirstPageSaga() {
    yield takeLatest(ADD_NEW_VIDEO_REDIRECT, redirectToFirstPageAction)
}

export { addNewVideoSaga, redirectToFirstPageSaga }
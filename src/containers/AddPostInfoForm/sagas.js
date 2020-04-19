import { put, call, takeLatest } from 'redux-saga/effects'
import { push, goBack } from 'connected-react-router'

import { ADD_NEW_VIDEO, ADD_NEW_VIDEO_SUCCESS, ADD_NEW_VIDEO_REDIRECT, ADD_NEW_VIDEO_GO_BACK } from './constants'

import { postVideo } from '../../api';

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

function* handleGoBackAction(action) {
    yield put(goBack())
}

function* backToPrevPageSaga() {
    yield takeLatest(ADD_NEW_VIDEO_GO_BACK, handleGoBackAction)
}

export { addNewVideoSaga, redirectToFirstPageSaga, backToPrevPageSaga }
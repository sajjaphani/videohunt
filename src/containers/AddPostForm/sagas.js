import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { push } from 'react-router-redux'

import { ADD_NEW_VIDEO, ADD_NEW_VIDEO_SUCCESS } from './constants'

import { postVideo } from '../../api/videoApi';

function* addNewVideoAction(action) {
    console.log('Action', action.payload)
    const post = yield call(postVideo, action.payload)
    console.log('Post', post)
    yield put(push('/'))
    yield put({ type: ADD_NEW_VIDEO_SUCCESS, payload: post })
}

function* addNewVideoSaga() {
    yield takeLatest(ADD_NEW_VIDEO, addNewVideoAction)
}

export { addNewVideoSaga }
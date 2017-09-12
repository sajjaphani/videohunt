import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { push } from 'react-router-redux'

import { CHECK_ADD_NEW_VIDEO, CHECK_ADD_NEW_VIDEO_SUCCESS, CHECK_ADD_NEW_VIDEO_DUPLICATE, CHECK_ADD_NEW_VIDEO_FAILURE } from './constants'

import { checkPostVideo } from '../../api/videoApi';

function* checkAddNewVideoAction(action) {
    const post = yield call(checkPostVideo, action.payload)
    console.log(post)
    switch (post.status) {
        case 'duplicate':
            yield put({ type: CHECK_ADD_NEW_VIDEO_DUPLICATE, payload: post.data })
            break;
        case 'submitted':
            yield put({ type: CHECK_ADD_NEW_VIDEO_SUBMITTED, payload: post.data })
            break;
        case 'ok':
            yield put({ type: CHECK_ADD_NEW_VIDEO_SUCCESS, payload: post.data })
            yield put(push('/posts/new/info'))
            break;
        default:
            yield put({ type: CHECK_ADD_NEW_VIDEO_FAILURE, payload: post.data })
            break;
    }
}

function* checkAddNewVideoSaga() {
    yield takeLatest(CHECK_ADD_NEW_VIDEO, checkAddNewVideoAction)
}

export { checkAddNewVideoSaga }
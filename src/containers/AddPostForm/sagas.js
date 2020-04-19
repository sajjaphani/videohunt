import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import {
    CHECK_ADD_NEW_VIDEO, CHECK_ADD_NEW_VIDEO_SUCCESS, CHECK_ADD_NEW_VIDEO_FAILURE,
    BACK_TO_HOME_PAGE
} from './constants'

import { checkPostVideo } from '../../api';

function* checkAddNewVideoAction(action) {
    const response = yield call(checkPostVideo, action.payload);
    switch (response.status) {
        case 'ok':
            yield put({ type: CHECK_ADD_NEW_VIDEO_SUCCESS, payload: response.data })
            yield put(push('/posts/new/info'))
            break;
        case 'error':
            yield put({ type: CHECK_ADD_NEW_VIDEO_FAILURE, payload: response.error })
            break;
        default:
            yield put({ type: CHECK_ADD_NEW_VIDEO_FAILURE, payload: {} });
    }
}

function* checkAddNewVideoSaga() {
    yield takeLatest(CHECK_ADD_NEW_VIDEO, checkAddNewVideoAction)
}

function* backToHomePageAction(action) {
    yield put(push('/'))
}

function* backToHomeSaga() {
    yield takeLatest(BACK_TO_HOME_PAGE, backToHomePageAction)
}

export { checkAddNewVideoSaga, backToHomeSaga }
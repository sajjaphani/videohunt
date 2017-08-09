import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS } from './constants'

import { getInitVideos } from '../../api/videoApi';

function* handleLoadVideosAction() {
    const feed = yield call(getInitVideos)
    yield put({ type: LOAD_VIDEOS_SUCCESS, payload: feed })
}

function* loadVideoSaga() {
    // while (true) {

        yield takeLatest(LOAD_VIDEOS, handleLoadVideosAction)
        // yield fork(handleLoadVideosAction)
    // }
}

export { loadVideoSaga }

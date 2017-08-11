import { put, takeLatest, fork, call } from 'redux-saga/effects'

import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOAD_MORE_VIDEOS, LOAD_MORE_VIDEOS_SUCCESS } from './constants'
import { getInitVideos, getNextVideos } from '../../api/videoApi';

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

function* handleLoadMoreVideosAction(action) {
    const feed = yield call(getNextVideos, action.nextUrl)
    yield put({ type: LOAD_MORE_VIDEOS_SUCCESS, payload: feed })
}

function* loadMoreVideoSaga() {
    yield takeLatest(LOAD_MORE_VIDEOS, handleLoadMoreVideosAction)
}

export { loadVideoSaga, loadMoreVideoSaga }

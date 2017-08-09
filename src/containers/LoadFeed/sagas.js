import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { LOAD_MORE_VIDEOS, LOAD_MORE_VIDEOS_SUCCESS } from './constants'

import { getNextVideos } from '../../api/videoApi';

function* handleLoadMoreVideosAction(action) {
    const feed = yield call(getNextVideos, action.nextUrl)
    yield put({ type: LOAD_MORE_VIDEOS_SUCCESS, payload: feed })
}

function* loadMoreVideoSaga() {
    yield takeLatest(LOAD_MORE_VIDEOS, handleLoadMoreVideosAction)
}

export { loadMoreVideoSaga }

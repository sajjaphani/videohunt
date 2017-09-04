import { put, takeLatest, fork, call } from 'redux-saga/effects'

import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOAD_MORE_VIDEOS, LOAD_MORE_VIDEOS_SUCCESS } from './constants'
import { getInitVideos, getNextVideos } from '../../api/videoApi';
import { fromJS } from 'immutable'

function* handleLoadVideosAction(action) {
    const { category } = action.payload
    let response = yield call(getInitVideos, category)
    if (category != 'All') {
        // reconstruct feed part for categories
        response = reconstructFeed(response)
    }
    yield put({ type: LOAD_VIDEOS_SUCCESS, payload: response, category: category })
}

function reconstructFeed(response) {
    const res = fromJS(response)
    const postIds = res.getIn(['data','posts']).keySeq().toJS()
    response = res.toJS()
    response.data.feed = {
        postIds
    }
    return response
}

function* loadVideoSaga() {
    yield takeLatest(LOAD_VIDEOS, handleLoadVideosAction)
}

function* handleLoadMoreVideosAction(action) {
    const { nextUrl, category } = action.payload
    let response = yield call(getNextVideos, nextUrl)
    if (category != 'All') {
        response = reconstructFeed(response)
    }
    yield put({ type: LOAD_MORE_VIDEOS_SUCCESS, payload: response, category: category })
}

function* loadMoreVideoSaga() {
    yield takeLatest(LOAD_MORE_VIDEOS, handleLoadMoreVideosAction)
}

export { loadVideoSaga, loadMoreVideoSaga }

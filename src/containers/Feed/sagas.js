import { put, takeLatest, call } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOAD_MORE_VIDEOS, LOAD_MORE_VIDEOS_SUCCESS } from './constants'
import { getInitVideos, getNextVideos } from '../../api';

function* handleLoadVideosAction(action) {
    const { topicId } = action.payload
    let response = yield call(getInitVideos, topicId)
    if (topicId !== 'all') {
        // reconstruct feed part for categories
        response = reconstructFeed(response)
    }
    
    yield put({ type: LOAD_VIDEOS_SUCCESS, payload: response, feedTopicId: topicId })
}

function reconstructFeed(response) {
    const res = fromJS(response)
    const postIds = res.getIn(['data', 'posts']).keySeq().toJS()
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
    const { nextUrl, topicId } = action.payload
    let response = yield call(getNextVideos, nextUrl)
    if (topicId !== 'all') {
        response = reconstructFeed(response)
    }

    yield put({ type: LOAD_MORE_VIDEOS_SUCCESS, payload: response, feedTopicId: topicId })
}

function* loadMoreVideoSaga() {
    yield takeLatest(LOAD_MORE_VIDEOS, handleLoadMoreVideosAction)
}

export { loadVideoSaga, loadMoreVideoSaga }

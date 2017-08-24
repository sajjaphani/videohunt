import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as Types from './constants'

import { loadSinglePost } from '../../api/videoApi'

function* handleLoadPost(action) {
    const { postId } = action.payload
    const postData = yield call(loadSinglePost, postId)
    yield put({ type: Types.LOAD_SINGLE_POST_SUCCESS, payload: postData })
}

function* loadPostSaga() {
    yield takeLatest(Types.LOAD_SINGLE_POST, handleLoadPost)
}

export { loadPostSaga }
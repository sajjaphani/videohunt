import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { PROFILE_HEADER, PROFILE_HEADER_SUCCESS } from './constants'

// import { updateSettings } from '../../api/videoApi';

function* handleProfileAction(action) {
    // const settings = yield call(updateSettings, action.payload)
    yield put({ type: PROFILE_SECTION_SUCCESS, payload: settings })
}

function* handleProfileHeaderSaga() {
    yield takeLatest(PROFILE_SECTION, handleProfileAction)
}

export { handleProfileHeaderSaga }
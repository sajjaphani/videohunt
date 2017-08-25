import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { PROFILE_SIDEBAR, PROFILE_SIDEBAR_SUCCESS } from './constants'

// import { updateSettings } from '../../api/videoApi';

function* handleProfileAction(action) {
    // const settings = yield call(updateSettings, action.payload)
    yield put({ type: PROFILE_SIDEBAR_SUCCESS, payload: settings })
}

function* handleProfileSidebarSaga() {
    yield takeLatest(PROFILE_SIDEBAR, updateSettingsAction)
}

export { handleProfileSidebarSaga }
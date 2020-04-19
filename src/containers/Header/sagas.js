import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { PROFILE_REQUEST, PROFILE_SUCCESS, SETTINGS_REQUEST, SETTINGS_SUCCESS } from './constants'

function* handleProfileAction() {
    yield put(push('/profile'))
    yield put({ type: PROFILE_SUCCESS })
}

function* profileSaga() {
    yield takeLatest(PROFILE_REQUEST, handleProfileAction)
}

function* handleSettingsAction() {
    yield put(push('/settings'))
    yield put({ type: SETTINGS_SUCCESS })
}

function* settingsSaga() {
    yield takeLatest(SETTINGS_REQUEST, handleSettingsAction)
}

export { profileSaga, settingsSaga }
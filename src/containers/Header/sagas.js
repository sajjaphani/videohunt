import { put, takeLatest } from 'redux-saga/effects'

import { LOGOUT_REQUEST, LOGOUT_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, SETTINGS_REQUEST, SETTINGS_SUCCESS } from './constants'

import { push } from 'react-router-redux'

function* handleLogoutAction() {
    localStorage.removeItem('jwtToken')
    yield put(push('/'))
    yield put({ type: LOGOUT_SUCCESS })
    window.location.reload()
}

function* logoutSaga() {
    yield takeLatest(LOGOUT_REQUEST, handleLogoutAction)
}

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

export { logoutSaga, profileSaga, settingsSaga }
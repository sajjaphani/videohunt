import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { push } from 'react-router-redux'

import { removeToken } from '../../utils/localStorage'
import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, SETTINGS_REQUEST, SETTINGS_SUCCESS } from './constants'


function* handleLogoutAction() {
    removeToken()
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
import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { LOAD_VIDEOS, LOAD_VIDEOS_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './constants'

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

export { logoutSaga }
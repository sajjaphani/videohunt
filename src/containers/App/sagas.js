import { put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { LOGIN_SUCCESS, LOGIN_REQUEST } from './constants'

function *handleLogin(action) {
    yield delay(2000) // send actual rest api call
    yield put({ type: LOGIN_SUCCESS })
}

function *loginSaga() {
    yield takeLatest(LOGIN_REQUEST, handleLogin)
}

export {loginSaga}
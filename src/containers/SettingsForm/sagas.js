import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { UPDATE_SETTINGS, UPDATE_SETTINGS_SUCCESS } from './constants'

import { updateSettings } from '../../api/videoApi';

function* updateSettingsAction(action) {
    const settings = yield call(updateSettings, action.payload)
    yield put({ type: UPDATE_SETTINGS_SUCCESS, payload: settings })
}

function* updateSettingsSaga() {
    yield takeLatest(UPDATE_SETTINGS, updateSettingsAction)
}

export { updateSettingsSaga }
import { put, takeLatest } from 'redux-saga/effects'

import { SELECT_SIDEBAR_ITEM, SELECT_SIDEBAR_ITEM_SUCCESS, RESET_APP_STATE } from './constants'

function* handleSidebarSelection(action) {
    const payload = action.payload;
    console.log(action.payload);
    if (payload.itemName !== 'all') {
        yield put({ type: SELECT_SIDEBAR_ITEM_SUCCESS, payload: payload })
    } else {
        yield put({ type: RESET_APP_STATE })
    }
}

function* sidebarSelectionSaga() {
    yield takeLatest(SELECT_SIDEBAR_ITEM, handleSidebarSelection)
}

export { sidebarSelectionSaga }
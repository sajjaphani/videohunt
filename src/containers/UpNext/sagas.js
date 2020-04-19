import { put, takeLatest, call } from 'redux-saga/effects'

import { LOAD_RECOMMENDATIONS, LOAD_RECOMMENDATIONS_SUCCESS } from './constants'
import { loadRecommendations } from '../../api';


function* handleLoadRecommendationsAction(action) {
    const { postId } = action.payload
    let response = yield call(loadRecommendations, postId)

    yield put({ type: LOAD_RECOMMENDATIONS_SUCCESS, payload: response.data })
}

function* loadRecommendationsSaga() {
    yield takeLatest(LOAD_RECOMMENDATIONS, handleLoadRecommendationsAction)
}

export { loadRecommendationsSaga }
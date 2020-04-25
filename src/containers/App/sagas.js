import { put, takeLatest, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import * as ActionTypes from './constants';

import { logoutUser, postSubscription, searchPosts, getFeedTopics, getTagTopics, getUserSession } from '../../api'

function* handleLogin(action) {
    yield put({ type: ActionTypes.LOGIN_REQUEST_SUCCESS, payload: action.payload })
}

function* loginSaga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, handleLogin)
}

function* handleLogoutAction(path) {
    yield call(logoutUser)
    yield put(push(path))
    yield put({ type: ActionTypes.LOGOUT_REQUEST_SUCCESS })
    window.location.reload()
}

function* handleLogout() {
    yield handleLogoutAction('/')
}

function* logoutSaga() {
    yield takeLatest(ActionTypes.LOGOUT_REQUEST, handleLogout)
}

function* handleSessionExpiredLogout() {
    yield handleLogoutAction('/login')
}

function* sessionExpiredSaga() {
    yield takeLatest(ActionTypes.TIMED_LOGOUT_REQUEST, handleSessionExpiredLogout)
}

function* handleSubsctiptionAction(action) {
    const data = yield call(postSubscription, action.data);
    yield put({ type: ActionTypes.ADD_SUBSCRIPTION_SUCCESS, payload: data })
}

function* addSubsctiptionSaga() {
    yield takeLatest(ActionTypes.ADD_SUBSCRIPTION, handleSubsctiptionAction)
}

function* handleSearchPostsAction(action) {
    const data = yield call(searchPosts, action.query);
    yield put({ type: ActionTypes.SEARCH_POSTS_SUCCESS, payload: data })
}

function* searchPostsSaga() {
    yield takeLatest(ActionTypes.SEARCH_POSTS, handleSearchPostsAction)
}

function* handleLoadFeedTopicsAction(action) {
    const data = yield call(getFeedTopics);
    yield put({ type: ActionTypes.LOAD_FEED_TOPICS_SUCCESS, payload: data })
}

function* loadFeedTopicsSaga() {
    yield takeLatest(ActionTypes.LOAD_FEED_TOPICS, handleLoadFeedTopicsAction)
}

function* handleLoadTagTopicsAction(action) {
    const data = yield call(getTagTopics);
    yield put({ type: ActionTypes.LOAD_TAG_TOPICS_SUCCESS, payload: data })
}

function* loadTagTopicsSaga() {
    yield takeLatest(ActionTypes.LOAD_TAG_TOPICS, handleLoadTagTopicsAction)
}

function* handleResetAppState() {
    yield put({ type: ActionTypes.APP__RESET__STATE });
    yield put({ type: ActionTypes.LOAD_USER_PREFERENCES });
}

function* resetAppStateSaga() {
    yield takeLatest(ActionTypes.RESET_APP_STATE, handleResetAppState)
}

function* handleCheckUserLoggedIn() {
    const response = yield call(getUserSession);
    yield put({ type: ActionTypes.GET_USER_SESSION_SUCCESS, payload: response.data })
    yield put({ type: ActionTypes.LOGIN_REQUEST_SUCCESS })
}

function* checkUserLoggedInSaga() {
    yield takeLatest(ActionTypes.GET_USER_SESSION, handleCheckUserLoggedIn)
}

export {
    loginSaga, logoutSaga, sessionExpiredSaga, addSubsctiptionSaga, searchPostsSaga,
    loadFeedTopicsSaga, loadTagTopicsSaga, resetAppStateSaga, checkUserLoggedInSaga
}
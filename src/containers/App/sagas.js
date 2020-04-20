import { put, takeLatest, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import jwt from 'jsonwebtoken'

import {
    LOGIN_SUCCESS, LOGIN_REQUEST,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, TIMED_LOGOUT_REQUEST,
    ADD_SUBSCRIPTION, ADD_SUBSCRIPTION_SUCCESS,
    SEARCH_POSTS, SEARCH_POSTS_SUCCESS,
    LOAD_FEED_TOPICS, LOAD_FEED_TOPICS_SUCCESS,
    LOAD_TAG_TOPICS, LOAD_TAG_TOPICS_SUCCESS,
    RESET_APP_STATE, APP__RESET__STATE,
    GET_USER_SESSION, GET_USER_SESSION_SUCCESS
} from './constants';
import { logoutUser, postSubscription, searchPosts, getFeedTopics, getTagTopics } from '../../api'

function* handleLogin(action) {
    yield put({ type: LOGIN_SUCCESS, payload: action.payload })
}

function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, handleLogin)
}

function* handleLogout() {
    yield call(logoutUser)
    localStorage.removeItem('jwtToken')
    yield put(push('/'))
    yield put({ type: LOGOUT_SUCCESS })
    window.location.reload()
}

function* logoutSaga() {
    yield takeLatest(LOGOUT_REQUEST, handleLogout)
}

function* handleTimedLogout() {
    yield call(logoutUser)
    localStorage.removeItem('jwtToken')
    yield put(push('/login'))
    yield put({ type: LOGOUT_SUCCESS })
    window.location.reload()
}

function* timedLogoutSaga() {
    yield takeLatest(TIMED_LOGOUT_REQUEST, handleTimedLogout)
}

function* handleSubsctiptionAction(action) {
    const data = yield call(postSubscription, action.data);
    yield put({ type: ADD_SUBSCRIPTION_SUCCESS, payload: data })
}

function* addSubsctiptionSaga() {
    yield takeLatest(ADD_SUBSCRIPTION, handleSubsctiptionAction)
}

function* handleSearchPostsAction(action) {
    const data = yield call(searchPosts, action.query);
    yield put({ type: SEARCH_POSTS_SUCCESS, payload: data })
}

function* searchPostsSaga() {
    yield takeLatest(SEARCH_POSTS, handleSearchPostsAction)
}

function* handleLoadFeedTopicsAction(action) {
    const data = yield call(getFeedTopics);
    yield put({ type: LOAD_FEED_TOPICS_SUCCESS, payload: data })
}

function* loadFeedTopicsSaga() {
    yield takeLatest(LOAD_FEED_TOPICS, handleLoadFeedTopicsAction)
}

function* handleLoadTagTopicsAction(action) {
    const data = yield call(getTagTopics);
    yield put({ type: LOAD_TAG_TOPICS_SUCCESS, payload: data })
}

function* loadTagTopicsSaga() {
    yield takeLatest(LOAD_TAG_TOPICS, handleLoadTagTopicsAction)
}

function* handleResetAppState() {
    yield put({ type: APP__RESET__STATE })
}

function* resetAppStateSaga() {
    yield takeLatest(RESET_APP_STATE, handleResetAppState)
}

function* handleCheckUserLoggedIn() {
    const sessionToken = localStorage.getItem('jwtToken');
    if (sessionToken !== null && typeof sessionToken !== 'undefined') {
        const user = jwt.decode(sessionToken)
        yield put({ type: GET_USER_SESSION_SUCCESS, payload: user })
        yield put({ type: LOGIN_SUCCESS, payload: user })
        // We need to remove the above, as it is redundant
    }
}

function* checkUserLoggedInSaga() {
    yield takeLatest(GET_USER_SESSION, handleCheckUserLoggedIn)
}

export {
    loginSaga, logoutSaga, timedLogoutSaga, addSubsctiptionSaga, searchPostsSaga,
    loadFeedTopicsSaga, loadTagTopicsSaga, resetAppStateSaga, checkUserLoggedInSaga
}
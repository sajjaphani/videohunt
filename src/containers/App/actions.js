import { push } from 'connected-react-router'

import * as ActionTypes from './constants'

const changeRoute = (route) => {
    return (dispatch) => {
        // push the new route using connected-react-router
        dispatch(pushRoute(route))
    }
}

const pushRoute = (route) => (push(route))

const loginRequest = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}

const loginSuccess = () => {
    return (dispatch) => {
        dispatch(getUserSession())
    }
}

export const logoutRequest = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const timedLogoutRequest = () => {
    return {
        type: ActionTypes.TIMED_LOGOUT_REQUEST
    }
}

const openLoginModal = () => {
    return {
        type: ActionTypes.LOGIN_MODAL_OPEN
    }
}

const closeLoginModal = () => {
    return {
        type: ActionTypes.LOGIN_MODAL_CLOSE
    }
}

const postsSearchRequest = (query) => {
    return {
        type: ActionTypes.SEARCH_POSTS,
        query: query
    }
}

const loadFeedTopics = () => {
    return {
        type: ActionTypes.LOAD_FEED_TOPICS
    }
}

const loadTagTopics = () => {
    return {
        type: ActionTypes.LOAD_TAG_TOPICS
    }
}

const handleHeadSectionDismiss = () => {
    return {
        type: ActionTypes.HANDLE_HEAD_SECTION_DISMISS
    }
}

const loadUserPreferences = () => {
    return {
        type: ActionTypes.LOAD_USER_PREFERENCES
    }
}

const resetState = () => {
    return {
        type: ActionTypes.RESET_APP_STATE
    }
}

const getUserSession = () => {
    return {
        type: ActionTypes.GET_USER_SESSION
    }
}

export {
    changeRoute,
    loginRequest, loginSuccess,
    openLoginModal, closeLoginModal,
    postsSearchRequest,
    loadFeedTopics, loadTagTopics,
    handleHeadSectionDismiss,
    loadUserPreferences,
    resetState,
    getUserSession
}
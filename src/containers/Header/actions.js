import { push } from 'connected-react-router'

import {
    loginRequest, openLoginModal, closeLoginModal, logoutRequest,
    postsSearchRequest, changeRoute, resetState
} from '../App/actions'
import { sidebarSelectAction } from '../Sidebar/actions'

import { PROFILE_REQUEST, SETTINGS_REQUEST } from './constants'

export const changeSelection = (e, { name }) => {
    return (dispatch) => {
        dispatch(push(convertSelectionToRoute(name)))
        if (name === 'home') {
            dispatch(sidebarSelectAction('feed', 'all'));
            dispatch(resetState);
        }
    }
}

const convertSelectionToRoute = (name) => {
    let route = ''
    if (name === 'post') {
        route = '/posts/new'
    } else if (name === 'home') {
        route = '/'
    }

    return route
}

export const handleLogin = (e, { name }) => {
    return (dispatch) => {
        dispatch(loginRequest());
        function authenticate(provider) {
            window.open('/api/v1/authentication/' + provider, "_self");
        }
        authenticate(name);
    }
}

export const openLogin = (open) => {
    return (dispatch) => {
        if (open) {
            dispatch(openLoginModal())
        } else {
            dispatch(closeLoginModal())
        }
    }
}

export const handleLogout = () => {
    return (dispatch) => {
        dispatch(logoutRequest())
    }
}

export const handleProfile = () => {
    return {
        type: PROFILE_REQUEST
    }
}

export const handleSettings = () => {
    return {
        type: SETTINGS_REQUEST
    }
}

export const handleTextSearch = (query) => {
    return (dispatch) => {
        dispatch(postsSearchRequest(query))
    }
}

export { changeRoute };

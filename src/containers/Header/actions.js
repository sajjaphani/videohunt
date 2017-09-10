import { push } from 'react-router-redux'
import jwt from 'jsonwebtoken'

import { loginRequest, loginSuccess, openLoginModal, closeLoginModal } from '../App/actions'
import setAuthToken from '../../utils/setAuthToken'
import { sidebarSelectAction } from '../Sidebar/actions'

import { LOGOUT_REQUEST, PROFILE_REQUEST, SETTINGS_REQUEST } from './constants'

export const changeSelection = (e, { name }) => {
    return (dispatch) => {
        dispatch(push(convertSelectionToRoute(name)))
        if (name == 'home') {
            dispatch(sidebarSelectAction('feed', 'All'))
        }
    }
}

const convertSelectionToRoute = (name) => {
    let route = ''
    if (name === 'post') {
        route = '/' + name
    } else if (name === 'home') {
        route = '/'
    }
    return route
}

export const handleLogin = (e, { name }) => {
    return (dispatch) => {
        dispatch(loginRequest())
        function authenticate(provider) {

            function receiveMessage(event) {
                // Do we trust the sender of this message?  (might be
                // different from what we originally opened, for example).

                if (event.origin === "http://localhost:3000") {
                    const token = event.data
                    localStorage.setItem('jwtToken', token)
                    setAuthToken(token)
                    const user = jwt.decode(token)
                    dispatch(loginSuccess(user))
                    dispatch(closeLoginModal)
                    window.location.reload()
                }

            }

            window.open('/api/v1/authentication/' + provider);
            window.addEventListener("message", receiveMessage, false);
        }
        authenticate(name)
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
    return {
        type: LOGOUT_REQUEST
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
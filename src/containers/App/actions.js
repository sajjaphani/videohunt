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

const loginSuccess = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: user
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

export { changeRoute, loginRequest, loginSuccess, openLoginModal, closeLoginModal }
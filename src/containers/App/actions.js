import { push } from 'react-router-redux'

import * as ActionTypes from './constants'

const changeRoute = (route) => {
    return (dispatch) => {
        // push the new route using react-router-redux
        dispatch(pushRoute(route))
    }
}

const pushRoute = (route) => (push(route))

const loginRequest = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_REQUEST })
    }
}

export { changeRoute, loginRequest }
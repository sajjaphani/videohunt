import { push } from 'react-router-redux'

import * as ActionTypes from './constants'

const changeRoute = (route) => {
    return (dispatch) => {
        // push the new route using react-router-redux
        dispatch(pushRoute(route))
    }
}

const pushRoute = (route) => (push(route))

const loginSuccess = () => ({
    type: ActionTypes.LOGIN_SUCCESS
})

export { changeRoute, loginSuccess }
import { push } from 'react-router-redux'
import jwt from 'jsonwebtoken'

import { loginRequest } from '../App/actions'
import * as ActionTypes from './constants'
import setAuthToken from '../../utils/setAuthToken'

export const changeSelection = (e, { name }) => {
    return (dispatch) => {
        // No need to retain change selection in header
        // dispatch({
        //     type: ActionTypes.CHANGE_SELECTION,
        //     payload: name
        // })
        // change route by pushing state using react-router-redux
        dispatch(push(convertSelectionToRoute(name)))
    }
}

const convertSelectionToRoute = (name) => {
    let route = ''
    if (name === 'post') {
        route = name
    } else if (name === 'home') {
        route = '/'
    }
    return route
}

export const handleLogin = (e, { name }) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_REQUEST })
        function authenticate(provider) {

            function receiveMessage(event) {
                // Do we trust the sender of this message?  (might be
                // different from what we originally opened, for example).

                if (event.origin === "http://localhost:3000") {
                    const token = event.data
                    localStorage.setItem('jwtToken', token)
                    setAuthToken(token)
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS })
                    console.log('user ',jwt.decode(token))
                }

            }

            window.open('/api/v1/authentication/' + provider);
            window.addEventListener("message", receiveMessage, false);
        }
        authenticate(name)
    }
}
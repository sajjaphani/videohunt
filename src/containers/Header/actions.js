import { push } from 'react-router-redux'

import { loginRequest } from '../App/actions'
import * as ActionTypes from './constants'

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
    function authenticate(provider) {
        window.authenticateCallback = function (token) {
            accessToken = token;
            console.log('This is access token ', accessToken)
            console.log('Not bad!!')
        };

        function receiveMessage(event) {
            // Do we trust the sender of this message?  (might be
            // different from what we originally opened, for example).

            if (event.origin === "http://localhost:3000") {
                console.log('This is here ', event.data)
                return;
            }

            // event.source is popup
            // event.data is "hi there yourself!  the secret response is: rheeeeet!"
        }

        window.open('/api/v1/authentication/' + provider);
        window.addEventListener("message", receiveMessage, false);
    }
    authenticate(name)
    return loginRequest()
}
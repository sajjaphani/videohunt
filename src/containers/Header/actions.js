import { push } from 'react-router-redux'

import { loginRequest } from '../App/actions'
import * as ActionTypes from './constants'

export const changeSelection = (e, {name}) => {
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

export const handleLogin = (e, {name}) => {
    return loginRequest()
}
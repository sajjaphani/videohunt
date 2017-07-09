import * as ActionTypes from './constants'

export const changeSelection = (e, {name}) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_SELECTION,
            activeSelection: name
        })
    }
}

export const handleLogin = (e, {name}) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.LOGIN_SUCCESS
        })
    }
}
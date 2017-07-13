import * as ActionTypes from './constants'
import { push } from 'react-router-redux'

export const changeSelection = (e, {name}) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_SELECTION,
            activeSelection: name
        })
        if(name === 'title') {
            dispatch(push('/'))
        } else if ( name === 'addPost') {
            dispatch(push('/new-post'))
        }
    }
}

export const handleLogin = (e, {name}) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.LOGIN_SUCCESS
        })
    }
}
import * as ActionTypes from './constants'
import { fromJS } from 'immutable'

const initState = {
    loggedIn : false,
    userId: 'srireddy',
}

export const appReducer = (state= fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return state.setIn(['loggedIn'], true)
    }
    return state
} 
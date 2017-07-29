import * as ActionTypes from './constants'
import { fromJS } from 'immutable'

const initState = {
    loggedIn: false,
    userId: '595f459865ac7f15c7a92b9d',
    loginLoading: false
}

export const appReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            let tempState = state.set('loginLoading', false)
            tempState = tempState.set('userId', action.payload.id)
            return tempState.setIn(['loggedIn'], true)
        case ActionTypes.LOGIN_REQUEST:
            return state.set('loginLoading', true)
    }
    return state
}


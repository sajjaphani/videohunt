import * as ActionTypes from './constants'

const headerState = {
    activeSelection: 'none',
    loggedIn: false
}

export const headerReducer = (state = headerState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SELECTION:
            return { ...state, activeSelection: action.activeSelection }
       case ActionTypes.LOGIN_SUCCESS:
            return { ...state, loggedIn: true } 
        default:
            return state
    }
}
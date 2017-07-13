import * as ActionTypes from './constants'
import { fromJS } from 'immutable'

const headerState = {
    activeSelection: 'none',
}

export const headerReducer = (state = fromJS(headerState), action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SELECTION:
            return state.setIn(['activeSelection'], action.payload)
        default:
            return state
    }
}
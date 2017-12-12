import * as ActionTypes from './constants'
import { fromJS } from 'immutable'

const initState = {
    loggedIn: false,
    userId: '595f459865ac7f15c7a92b9d',
    loginLoading: false,
    loginModalOpen: false,
    languages: 'all',
    feed: 'all'
}

export const appReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.SELECT_SIDEBAR_ITEM:
            const { itemType, itemName } = action.payload
            return state.set(itemType, itemName)
        case ActionTypes.LOGIN_SUCCESS:
            let tempState = state.set('loginLoading', false)
            tempState = tempState.set('userId', action.payload.id)
            return tempState.setIn(['loggedIn'], true)
        case ActionTypes.LOGIN_REQUEST:
            return state.set('loginLoading', true)
        case ActionTypes.LOGIN_MODAL_OPEN:
            return state.set('loginModalOpen', true)
        case ActionTypes.LOGIN_MODAL_CLOSE:
            return state.set('loginModalOpen', false)
        default:
            return state
    }
}


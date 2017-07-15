import * as ActionTypes from './constants'
import { fromJS } from 'immutable'

const initState = {
    loggedIn : false,
    userId: '595f459865ac7f15c7a92b9d',
}

export const appReducer = (state= fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return state.setIn(['loggedIn'], true)
    }
    return state
} 
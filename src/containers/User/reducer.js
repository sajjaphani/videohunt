import { fromJS } from 'immutable'

import * as ActionTypes from './constants'

const userReducer = (state = fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.users)
        case ActionTypes.LOGIN_SUCCESS:
            return state.set(action.payload.id, fromJS(action.payload))
    }
    return state
}

export { userReducer }
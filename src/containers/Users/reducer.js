import { fromJS } from 'immutable'

import * as ActionTypes from './constants'

const usersReducer = (state = fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.users)
    }
    return state
}

export { usersReducer }
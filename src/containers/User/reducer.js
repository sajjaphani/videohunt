import { fromJS } from 'immutable'

import * as ActionTypes from './constants'

const userReducer = (state = fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
        case ActionTypes.LOAD_MORE_VIDEOS_SUCCESS:
        case ActionTypes.LOAD_SINGLE_POST_SUCCESS: 
        case ActionTypes.Fetch_POST_COMMENTS_SUCCESS:
        case ActionTypes.Fetch_COMMENT_REPLIES_SUCCESS:        
            return state.mergeDeep(action.payload.data.users)
        case ActionTypes.LOGIN_SUCCESS:
            return state.set(action.payload.id, fromJS(action.payload))
    }
    return state
}

export { userReducer }
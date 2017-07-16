import { fromJS } from 'immutable'
import * as ActionTypes from './constants'

const initState = {}

const commentsReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.comments)
        default:
            break;
    }
    return state
}

export { commentsReducer }
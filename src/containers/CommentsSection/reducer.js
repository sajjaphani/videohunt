import { fromJS } from 'immutable'
import * as ActionTypes from './constants'

const initState = {}

const commentsReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.data.comments)
        case ActionTypes.ADD_POST_COMMENT_SUCCESS:
            const { commentId } = action.payload
            return state.set(commentId, fromJS(action.payload))
        default:
            break
    }
    return state
}

export { commentsReducer }
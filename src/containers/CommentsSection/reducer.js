import { fromJS } from 'immutable'
import * as ActionTypes from './constants'

const initState = {}

const commentsReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.data.comments)
        case ActionTypes.ADD_POST_COMMENT_SUCCESS: {
            const { commentId } = action.payload
            return state.set(commentId, fromJS(action.payload))
        }
        case ActionTypes.ADD_COMMENT_REPLY_SUCCESS: {
            const { parentId, commentId } = action.payload
            // get parents current replies count
            const repliesCount = state.getIn([parentId, 'replies', 'summary', 'count'])
            // increment parents replies count
            const repliesCountState = state.setIn([parentId, 'replies', 'summary', 'count'], repliesCount + 1)
            // add reply comment it in parent comment replies data
            const parentCommentState = repliesCountState.updateIn([parentId, 'replies', 'data'], list => list.push(commentId))
            // add reply comment in comments state
            const addState = parentCommentState.set(commentId, fromJS(action.payload))
            // Make the replies visible
            return addState.setIn([parentId, 'showReplies'], true)
        }
        case ActionTypes.TOGGLE_REPLY: {
            const { commentId } = action.payload
            const showReplyForm = state.getIn([commentId, 'showReplyForm'])
            return state.setIn([commentId, 'showReplyForm'], !showReplyForm)
        }
        case ActionTypes.SHOW_REPLIES: {
            const { commentId } = action.payload
            const showReplies = state.getIn([commentId, 'showReplies'])
            return state.setIn([commentId, 'showReplies'], !showReplies)
        }
        default:
            break
    }
    return state
}

export { commentsReducer }
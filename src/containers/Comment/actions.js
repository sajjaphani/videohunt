import * as ActionTypes from './constants'

export function toggleReply(commentId) {
    return {
        type: ActionTypes.TOGGLE_REPLY,
        payload: {
            commentId
        }
    }
}

export function showReplies(commentId) {
    return {
        type: ActionTypes.SHOW_REPLIES,
        payload: {
            commentId
        }
    }
}

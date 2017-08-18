import * as ActionTypes from './constants'

export function toggleReply(commentId) {
    return function(dispatch){
        // display reply form
        dispatch(toggleAction(commentId))
        // and then show all replies
        dispatch(showReplies(commentId))
    }
}

function toggleAction(commentId) {
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

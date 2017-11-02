import * as ActionTypes from './constants'

export function toggleReply(commentId, isShowReplies) {
    return function(dispatch){
        // display reply form
        dispatch(toggleReplyAction(commentId))
        if (!isShowReplies) {
            // and then show all replies only if replies are hidden
            dispatch(showReplies(commentId))
        }
    }
}

function toggleReplyAction(commentId) {
    return {
        type: ActionTypes.TOGGLE_REPLY,
        payload: {
            commentId
        }
    }
}

export function toggleLike(commentId, isLiked) {
    const type = isLiked ? ActionTypes.UNLIKE_COMMENT : ActionTypes.LIKE_COMMENT
    return {
        type: type,
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

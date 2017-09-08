import * as Types from './constants'

export const loadPostComments = (postId, nextUrl) => {
    return {
        type: Types.Fetch_POST_COMMENTS,
        payload: {
            postId,
            nextUrl
        }
    }
}

export const loadCommentReplies = (commentId, nextUrl) => {
    return {
        type: Types.Fetch_COMMENT_REPLIES,
        payload: {
            commentId,
            nextUrl
        }
    }
}
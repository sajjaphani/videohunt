import { ADD_POST_COMMENT, ADD_COMMENT_REPLY } from './constants'

export const addComment = (comment) => {
    return {
        type: ADD_POST_COMMENT,
        comment: comment
    }
}

export const addReply = (comment) => {
    return {
        type: ADD_COMMENT_REPLY,
        comment: comment
    }
}
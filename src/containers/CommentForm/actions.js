import { ADD_POST_COMMENT } from './constants'

const addComment = (comment) => {
    return {
        type: ADD_POST_COMMENT,
        comment: comment
    }
}

export { addComment }
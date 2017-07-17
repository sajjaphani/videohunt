import { ADD_POST_COMMENT } from './constants'

const addComment = (comment) => {
    return (dispatch) => {
        dispatch({
            type: ADD_POST_COMMENT,
            payload: comment
        })
    }
}

export { addComment }
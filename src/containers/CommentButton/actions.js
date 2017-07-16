import { TOGGLE_COMMENT } from './constants'

const toggleComment = (postId, expand) => {
    return (dispatch) => {
        return dispatch(
            {
                type: TOGGLE_COMMENT,
                payload: {
                    postId: postId,
                    expand: expand
                }
            }
        )
    }
}

export { toggleComment }
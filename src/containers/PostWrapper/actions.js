import * as Types from './constants'

export const loadPost = (postId) => {
    return {
        type: Types.LOAD_SINGLE_POST,
        payload: {
            postId
        }
    }
}
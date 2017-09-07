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
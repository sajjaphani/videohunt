import { LIKE_POST, UNLIKE_POST, LOGIN_MODAL_OPEN } from './constants'

function toggleLike(postId, like, isLoggedIn) {
    if (isLoggedIn) {
        const type = like ? LIKE_POST : UNLIKE_POST
        return {
            type: type,
            payload: {
                postId: postId
            }
        }
    } else {
        return {
            type: LOGIN_MODAL_OPEN,
        }
    }
}

export { toggleLike }
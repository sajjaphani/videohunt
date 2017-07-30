import { LIKE_POST, UNLIKE_POST, LOGIN_MODAL_OPEN } from './constants'

const togglePost = (postId, like) => {
    return (dispatch, getState) => {
        // TODO: Refactor:  get userid in reducer where state is accesible
        const { userId, loggedIn } = getState().app.toJS()
        if (loggedIn) {
            const type = like ? LIKE_POST : UNLIKE_POST
            dispatch({
                type: type,
                payload: {
                    userId: userId,
                    postId: postId
                }
            })
        } else {
            // TODO: dispatch SHOW_LOGIN action that redirects to login page
            dispatch({
                type: LOGIN_MODAL_OPEN,
            })
        }
    }
}

export { togglePost }
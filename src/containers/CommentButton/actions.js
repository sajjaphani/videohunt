import { changeRoute } from '../App/actions'

const toggleComment = (postId, _) => {
    return (dispatch) => {
        const postPath = '/posts/' + postId;
        dispatch(changeRoute(postPath))
    }
}

export { toggleComment }
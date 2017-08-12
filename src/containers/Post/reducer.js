import * as Types from './constants'
import { fromJS } from 'immutable'

const posts = {

}

export const postsReducer = (state = fromJS(posts), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
        case Types.LOAD_MORE_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.data.posts)
        case Types.ADD_NEW_VIDEO:
            const post = action.payload
            return state.set(post.id, fromJS(post))
        case Types.LIKE_POST_SUCCESS:
            {
                // TODO: refactor to minimize operations
                const { postId, userId } = action.payload
                const likeCount = state.getIn([postId, 'likes', 'summary', 'count'])
                const likecountState = state.setIn([postId, 'likes', 'summary', 'count'], likeCount + 1)
                const hasLiked = likecountState.getIn([postId, 'likes', 'summary', 'has_liked'])
                const hasLikedState = likecountState.setIn([postId, 'likes', 'summary', 'has_liked'], !hasLiked)
                return hasLikedState.updateIn([postId, 'likes', 'data'], list => list.push(userId))
            }
        case Types.UNLIKE_POST_SUCCESS:
            {
                // TODO: refactor to minimize operations
                const { postId, userId } = action.payload
                const likeCount = state.getIn([postId, 'likes', 'summary', 'count'])
                const likecountState = state.setIn([postId, 'likes', 'summary', 'count'], likeCount - 1)
                const hasLiked = likecountState.getIn([postId, 'likes', 'summary', 'has_liked'])
                const hasLikedState = likecountState.setIn([postId, 'likes', 'summary', 'has_liked'], !hasLiked)
                return hasLikedState.updateIn([postId, 'likes', 'data'], list => list.delete(list.indexOf(userId)))
            }
        case Types.TOGGLE_COMMENT:
            {
                const { postId, expand } = action.payload
                return state.setIn([postId, 'expandComments'], expand)
            }
        case Types.ADD_POST_COMMENT_SUCCESS: {
            const { postId, commentId } = action.payload
            return state.updateIn([postId, 'comments'], list => list.push(commentId))
        }
        default:
            state
    }
    return state
}
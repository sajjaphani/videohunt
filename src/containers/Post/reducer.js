import * as Types from './constants'
import { fromJS } from 'immutable'

const posts = {

}

export const postsReducer = (state = fromJS(posts), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
        case Types.LOAD_MORE_VIDEOS_SUCCESS:
        case Types.LOAD_SINGLE_POST_SUCCESS:
            return state.mergeDeep(action.payload.data.posts)
        case Types.ADD_NEW_VIDEO_SUCCESS:
            const post = action.payload.post
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
        // case Types.TOGGLE_COMMENT:
        //     {
        //         const { postId, expand } = action.payload
        //         return state.setIn([postId, 'expandComments'], expand)
        //     }
        case Types.ADD_POST_COMMENT_SUCCESS: {
            const { postId, commentId } = action.payload
            const commentCount = state.getIn([postId, 'comments', 'summary', 'count'])
            const commentCountState = state.setIn([postId, 'comments', 'summary', 'count'], commentCount + 1)
            return commentCountState.updateIn([postId, 'comments', 'data'], list => list.unshift(commentId))
        }
        case Types.Fetch_POST_COMMENTS_SUCCESS: {
            const { postId, payload } = action
            const comments = fromJS(payload).getIn(['data', 'comments']).keySeq();
            const commentsState = state.updateIn([postId, 'comments', 'data'], list => list.concat(comments))
            const nextUrl = fromJS(payload).getIn(['pagination', 'next'])
            const pagingState = commentsState.setIn([postId, 'comments', 'paging', 'next'], nextUrl)
            return pagingState.setIn([postId, 'comments', 'loading'], false)
        }
        case Types.Fetch_POST_COMMENTS: {
            const { postId } = action.payload
            return state.setIn([postId, 'comments', 'loading'], true)
        }
        default:
            return state
    }

}
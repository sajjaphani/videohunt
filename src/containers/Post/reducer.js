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
                const { postId, userId } = action.payload
                return state.updateIn([postId, 'likes'], list => {
                    let lstData = list.get('data')
                    lstData.push(userId)
                    return list
                })
            }
        case Types.UNLIKE_POST_SUCCESS:
            {
                const { postId, userId } = action.payload
                return state.updateIn([postId, 'likes'], list => {
                    let lstData = list.get('data')
                    lstData.delete(lstData.indexOf(userId))
                    return list
                })
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
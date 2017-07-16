import * as Types from './constants'
import { fromJS } from 'immutable'

const posts = {

}

export const postsReducer = (state = fromJS(posts), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.posts)
        case Types.ADD_NEW_VIDEO:
            const post = action.payload
            return state.set(post.id, fromJS(post))
        case Types.LIKE_POST:
            {
                const { postId, userId } = action.payload
                return state.updateIn([postId, 'likes'], list => list.push(userId))
            }
        case Types.UNLIKE_POST:
            {
                const { postId, userId } = action.payload
                return state.updateIn([postId, 'likes'], list => list.delete(list.indexOf(userId)))
            }
        default:
            state
    }
    return state
}
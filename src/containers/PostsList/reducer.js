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
            return state.set(post.id,fromJS(post))
        default:
            state
    }
    return state
}
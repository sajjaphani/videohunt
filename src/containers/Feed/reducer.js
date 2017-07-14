import * as types from './constants';
import { fromJS } from 'immutable'

const initialState = {
}

export const feedReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case types.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.feed)
        case types.ADD_NEW_VIDEO:
            const post = action.payload
            const feedKey = new Date(post.postedOn).toDateString()
            if (state.has(feedKey)) {
                return state.update(feedKey, list => list.push(post.id))
            } else {
                return state.set(feedKey, fromJS([post.id]))
            }
        case types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
} 
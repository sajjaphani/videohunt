import * as Types from './constants';
import { fromJS } from 'immutable'



const initialState = {
}

export const feedReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
            const tempState = state.set('pagination', fromJS(action.payload.pagination))
            return tempState.set('data', fromJS(action.payload.data.feed))
        case Types.LOAD_MORE_VIDEOS_SUCCESS: {
            const tempState = state.set('pagination', fromJS(action.payload.pagination))
            const oldFeed = state.get('data')
            const newFeed = fromJS(action.payload.data.feed)
            return tempState.set('data', oldFeed.mergeDeep(newFeed))
        }
        case Types.ADD_NEW_VIDEO_SUCCESS:
            // return state
            const post = action.payload.post
            const feedKey = action.payload.feedKey
            if (state.get('data').has(feedKey)) {
                return state.updateIn(['data', feedKey], list => list.push(post.id))
            } else {
                return state.setIn(['data', feedKey], fromJS([post.id]))
            }
        case Types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
} 
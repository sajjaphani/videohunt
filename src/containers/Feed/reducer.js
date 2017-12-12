import * as Types from './constants';
import { fromJS } from 'immutable'



const initialState = {
}

export const feedReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
            let { category, payload } = action
            const tempState = state.setIn([category, 'pagination'], fromJS(payload.pagination))
            return tempState.setIn([category, 'data'], fromJS(payload.data.feed))
        case Types.LOAD_MORE_VIDEOS_SUCCESS: {
            let { category, payload } = action
            if (category === 'all') {
                const tempState = state.setIn([category, 'pagination'], fromJS(payload.pagination))
                const oldFeed = state.getIn([category, 'data'])
                const newFeed = fromJS(payload.data.feed)
                return tempState.setIn([category, 'data'], oldFeed.mergeDeep(newFeed))
            } else {
                const tempState = state.setIn([category, 'pagination'], fromJS(payload.pagination))
                const oldFeed = state.getIn([category, 'data', 'postIds'])
                const newFeed = fromJS(payload.data.feed.postIds)
                return tempState.setIn([category, 'data','postIds'], oldFeed.concat(newFeed))
            }
        }
        case Types.ADD_NEW_VIDEO_SUCCESS:
            // return state
            const post = action.payload.post
            const feedKey = action.payload.feedKey
            if (state.getIn(['all', 'data']).has(feedKey)) {
                return state.updateIn(['all', 'data', feedKey], list => list.push(post.id))
            } else {
                return state.setIn(['all', 'data', feedKey], fromJS([post.id]))
            }
        case Types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
} 
import * as Types from './constants';
import { fromJS } from 'immutable'

const initialState = {
}

export const feedReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.LOAD_VIDEOS_SUCCESS:
            let { feedTopicId, payload } = action;
            let tempState = state.setIn([feedTopicId, 'pagination'], fromJS(payload.pagination));
            tempState = tempState.setIn([feedTopicId, 'init'], fromJS({ initializing: false }));
            return tempState.setIn([feedTopicId, 'data'], fromJS(payload.data.feed))
        case Types.LOAD_MORE_VIDEOS_SUCCESS: {
            let { feedTopicId, payload } = action;
            const tempState = state.setIn([feedTopicId, 'pagination'], fromJS(payload.pagination));
            const oldFeed = state.getIn([feedTopicId, 'data', 'postIds']);;
            const newFeed = fromJS(payload.data.feed.postIds)
            return tempState.setIn([feedTopicId, 'data', 'postIds'], oldFeed.concat(newFeed));
        }
        case Types.ADD_NEW_VIDEO_SUCCESS:
            // return state
            const post = action.payload.post
            if (state.getIn(['all', 'data', 'postIds'])) {
                return state.updateIn(['all', 'data', 'postIds'], list => list.unshift(post.id))
            } else {
                return state.setIn(['all', 'data', 'postIds'], fromJS([post.id]))
            }
        case Types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
}

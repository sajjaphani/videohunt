import * as types from './constants';
import { fromJS } from 'immutable'

const initialState = {
}

export const feedReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case types.LOAD_VIDEOS_SUCCESS:
            const tempState = state.set('pagination',fromJS(action.payload.pagination))
            return tempState.set('data',fromJS(action.payload.data.feed))
        case types.ADD_NEW_VIDEO:
            const post = action.payload
            const feedKey = new Date(post.postedOn).toISOString()
            if (state.get('data').has(feedKey)) {
                return state.updateIn(['data', feedKey], list => list.push(post.id))
            } else {
                return state.setIn(['data', feedKey], fromJS([post.id]))
            }
        case types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
} 
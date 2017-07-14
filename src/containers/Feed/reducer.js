import * as types from './constants';
import { fromJS } from 'immutable'

const initialState = {
}

export const postsReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case types.LOAD_VIDEOS_SUCCESS:
            return state.mergeDeep(action.payload.feed)
        case types.POST_NEW_VIDEO:
            const posts = [...state];
            console.log('state',state)
            console.log('New post',action.newPost)
            posts.unshift(action.newPost)
            return posts
        case types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state; 
    }
} 
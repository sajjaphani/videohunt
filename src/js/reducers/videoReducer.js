
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function videoReducer(state = initialState.videos, action) {
    console.log(action.type)
    switch (action.type) {
        case types.LOAD_VIDEOS_SUCCESS:
            return action.videos
        case types.POST_NEW_VIDEO:
            const videos = [...state];
            console.log('Inside reducer....')
            console.log(action.video)
            console.log(videos)
            videos[0].posts.unshift(action.video)
            return videos
        case types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state;
    }
}
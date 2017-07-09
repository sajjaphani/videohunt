import * as types from './constants';

const initialState = {
  videos: []
}

export default function posts(state = initialState.videos, action) {
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
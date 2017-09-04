import * as ActionTypes from './constants';

export function loadVideos(category) {
    return {
        type: ActionTypes.LOAD_VIDEOS,
        payload: {
            category
        }
    }
} 

export function loadMoreVideos(category, nextUrl) {
    return {
        type: ActionTypes.LOAD_MORE_VIDEOS,
         payload: {
            category,
            nextUrl
        }
    }
}
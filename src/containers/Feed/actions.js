import * as ActionTypes from './constants';

export function loadVideos(topicId) {
    return {
        type: ActionTypes.LOAD_VIDEOS,
        payload: {
            topicId
        }
    }
}

export function loadMoreVideos(topicId, nextUrl) {
    return {
        type: ActionTypes.LOAD_MORE_VIDEOS,
        payload: {
            topicId,
            nextUrl
        }
    }
}
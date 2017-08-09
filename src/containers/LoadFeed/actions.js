import * as ActionTypes from './constants';

export function loadMoreVideos(nextUrl) {
    return {
        type: ActionTypes.LOAD_MORE_VIDEOS, nextUrl: nextUrl
    }
}


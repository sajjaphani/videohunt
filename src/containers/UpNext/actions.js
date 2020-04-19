import * as ActionTypes from './constants';

export function loadRecommendations(postId) {
    return {
        type: ActionTypes.LOAD_RECOMMENDATIONS,
        payload: {
            postId
        }
    }
}

export function loadMoreRecommendations(postId, nextUrl) {
    return {
        type: ActionTypes.LOAD_MORE_RECOMMENDATIONS,
        payload: {
            postId,
            nextUrl
        }
    }
}
import * as ActionTypes from './constants';
import { push } from 'react-router-redux'
import videoApi from '../../api/videoApi';


export function loadVideos() {
    return {
        type: ActionTypes.LOAD_VIDEOS
    }
} 

export function loadVideoByPostId(postId) {
    return function (dispatch) {
        return videoApi.getVideoByPost(postId).then(video => {
            dispatch(loadVideoByPostSuccess(video));
        }).catch(error => {
            throw (error);
        });
    };
}

export function loadVideosSuccess(feed) {
    return { type: ActionTypes.LOAD_VIDEOS_SUCCESS, payload: feed };
}

export function loadVideoByPostSuccess(video) {
    return { type: ActionTypes.LOAD_VIDEO_BY_POST_SUCCESS, video };
}

export function loadMoreVideos(nextUrl) {
    return {
        type: ActionTypes.LOAD_MORE_VIDEOS, nextUrl: nextUrl
    }
}
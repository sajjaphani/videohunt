import * as ActionTypes from './constants';
import { push } from 'react-router-redux'
import videoApi from '../../api/videoApi';


export function loadVideos() {
    return function (dispatch) {
            dispatch(loadVideosSuccess(videoApi.getAll()));
    };
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

export function postNewVideo(newPost) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.POST_NEW_VIDEO,
            newPost: newPost
        })
        dispatch(push('/'))
    }
}

export function loadVideosSuccess(posts) {
    return { type: ActionTypes.LOAD_VIDEOS_SUCCESS, posts };
}

export function loadVideoByPostSuccess(video) {
    return { type: ActionTypes.LOAD_VIDEO_BY_POST_SUCCESS, video };
}
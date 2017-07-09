import * as types from './constants';

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

export function postNewVideo(url) {
    console.log('Video... ' + url)
    const video = {
        postId: 'dxdsdxax',
        title: 'Some Random Title | Some Title ',
        subtitle: 'Some Sub Title',
        url: url,
        comments: 250,
        likes: 1200,
        postedBy: 'random.user'
    }

    return { type: types.POST_NEW_VIDEO, video };
}

export function loadVideosSuccess(videos) {
    return { type: types.LOAD_VIDEOS_SUCCESS, videos };
}

export function loadVideoByPostSuccess(video) {
    return { type: types.LOAD_VIDEO_BY_POST_SUCCESS, video };
}
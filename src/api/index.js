import axios from 'axios'
import swal from 'sweetalert';

import { store } from '../store';
import { timedLogoutRequest } from '../containers/App/actions'

// We may set environment variable
// TODO in production we may not need this?
const apiBaseUrl = 'https://localhost:3000';

export function getInitVideos(category) {
    if (category === 'all') {
        return getNextVideos('/api/v1/posts')
    } else {
        return getNextVideos('/api/v1/category/' + encodeURIComponent(category.toLowerCase()))
    }
}

export function getNextVideos(nextUrl) {
    const index = nextUrl.lastIndexOf(apiBaseUrl)
    let url = index > -1 ? nextUrl.substring(index + apiBaseUrl.length) : nextUrl;

    return axios.get(url)
        .then(response => response.data)
        .catch(err => {
            return handleError(err, []);
        });
}

export function postComment(postId, content) {
    let postCommentUrl = '/api/v1/posts/' + postId + '/comments';
    const comment = {
        content: content
    };
    return axios.post(postCommentUrl, comment)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function postReply(comment) {
    let postCommentUrl = '/api/v1/comments/' + comment.parentId + '/comments';
    const reply = {
        content: comment.text
    };
    return axios.post(postCommentUrl, reply)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function getPostComments(nextUrl) {
    const index = nextUrl.lastIndexOf(apiBaseUrl)
    let url = index > -1 ? nextUrl.substring(index + apiBaseUrl.length) : nextUrl
    return axios.get(url)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function getCommentReplies(commentId) {
    let getCommentsUrl = '/api/v1/comments/' + commentId + '/comments'
    return axios.get(getCommentsUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function togglePostLike(postId, liked) {
    let likePostUrl = '/api/v1/posts/' + postId + '/like'
    return axios.post(likePostUrl,
        {
            liked: liked
        })
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function postVideo(post) {
    let postVideoUrl = '/api/v1/posts/'
    return axios.post(postVideoUrl, post)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function toggleCommentLike(commentId, liked) {
    let likeCommentUrl = '/api/v1/comments/' + commentId + '/like'
    return axios.post(likeCommentUrl,
        {
            liked: liked
        })
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function loadSinglePost(postId) {
    let getPostUrl = '/api/v1/posts/' + postId
    return axios.get(getPostUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function checkPostVideo(post) {
    let postVideoUrl = '/api/v1/posts/status'
    return axios.post(postVideoUrl, post)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function searchPosts(search) {
    let getPostsUrl = '/api/v1/posts/search?q=' + search
    return axios.get(getPostsUrl)
        .then(response => { console.log('rxx', response); return response.data })
        .catch(err => {
            return handleError(err);
        });
}

export function logoutUser() {
    let logoutUrl = '/api/v1/users/logout'
    return axios.delete(logoutUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function postSubscription(data) {
    let subscriptionUrl = '/api/v1/subscriptions';
    return axios.post(subscriptionUrl, data)
        .then(response => response.data)
        .catch(err => {
            console.log('err', err)
            return handleError(err);
        });
}

export function loadRecommendations(postId) {
    let restUrl = '/api/v1/posts/' + postId + '/recommendations'
    return axios.get(restUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function getFeedTopics() {
    let restUrl = '/api/v1/topics/feed-topics'
    return axios.get(restUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function getTagTopics() {
    let restUrl = '/api/v1/topics/tagging'
    return axios.get(restUrl)
        .then(response => response.data)
        .catch(err => {
            return handleError(err);
        });
}

export function getUserSession() {
    let restUrl = '/api/v1/users/session'
    return axios.get(restUrl)
        .then(response => response.data)
        .catch(err => {
            handleError(err);
            return null;
        });
}

function handleError(error, _default) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);

    if (_default) {
        return _default;
    }

    console.log('hey')
    return {};
}

axios.interceptors.response.use(function (response) {
    // console.log('res', response);
    return response;
}, function (error) {
    if (401 === error.response.status) {
        swal({
            title: "Session Expired",
            text: "Your session has expired. Would you like to be redirected to the login page?",
            icon: "warning",
            dangerMode: true,
        }).then(() => {
            store.dispatch(timedLogoutRequest());
            return Promise.reject(error.response);
        });
    } else {
        return Promise.reject(error);
    }
});
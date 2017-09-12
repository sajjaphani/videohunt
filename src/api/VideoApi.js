import axios from 'axios'

// We may set environment variable
// TODO in production we may not need this?
const apiBaseUrl = 'http://localhost:3000'

export function getInitVideos(category) {
    if (category == 'All') {
        return getNextVideos('/api/v1/posts')
    } else {
        return getNextVideos('/api/v1/category/' + encodeURIComponent(category.toLowerCase()))
    }
}

export function getNextVideos(nextUrl) {
    const index = nextUrl.lastIndexOf(apiBaseUrl)
    let url = index > -1 ? nextUrl.substring(index + apiBaseUrl.length) : nextUrl
    return axios.get(url)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function postComment(postId, content) {
    let postCommentUrl = '/api/v1/posts/' + postId + '/comments'
    return axios.post(postCommentUrl, {
        content: content
    })
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function postReply(comment) {
    let postCommentUrl = '/api/v1/comments/' + comment.parentId + '/comments'
    return axios.post(postCommentUrl, {
        content: comment.text
    })
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function getPostComments(nextUrl) {
    const index = nextUrl.lastIndexOf(apiBaseUrl)
    let url = index > -1 ? nextUrl.substring(index + apiBaseUrl.length) : nextUrl
    return axios.get(url)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function getCommentReplies(commentId) {
    let getCommentsUrl = '/api/v1/comments/' + commentId + '/comments'
    return axios.get(getCommentsUrl)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function togglePostLike(postId, liked) {
    let likePostUrl = '/api/v1/posts/' + postId + '/like'
    return axios.post(likePostUrl, {
        liked: liked
    })
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function postVideo(post) {
    let postVideoUrl = '/api/v1/posts/'
    return axios.post(postVideoUrl, post)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function toggleCommentLike(commentId, liked) {
    let likeCommentUrl = '/api/v1/comments/' + commentId + '/like'
    return axios.post(likeCommentUrl, {
        liked: liked
    })
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function loadSinglePost(postId) {
    let getPostUrl = '/api/v1/posts/' + postId
    return axios.get(getPostUrl)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function checkPostVideo(post) {
    let postVideoUrl = '/api/v1/posts/status'
    return axios.post(postVideoUrl, post)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}
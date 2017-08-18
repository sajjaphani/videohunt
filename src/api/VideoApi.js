import sampleJson from './sample2'
import axios from 'axios'

// We may set environment variable
// TODO in production we may not need this?
const apiBaseUrl = 'http://localhost:3000'

export function getInitVideos() {
    return sampleJson
    //  return getNextVideos('/api/v1/posts') 
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
    // let postCommentUrl = '/api/v1/posts/' + postId + '/comments'
    // return axios.post(postCommentUrl, {
    //     content: content
    // })
    //     .then(response => response.data)
    //     .catch(err => {
    //         throw err;
    //     });
    return comment
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
    console.log('Posta', post)
    let postVideoUrl = '/api/v1/posts/'
    return axios.post(postVideoUrl, post)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}
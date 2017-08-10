import sampleJson from './sample2'
import axios from 'axios'

export function getInitVideos() {
    //  return sampleJson
    return axios.get('http://localhost:8080/api/v1/posts')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export function getNextVideos(nextUrl) {
    return axios.get(nextUrl)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}
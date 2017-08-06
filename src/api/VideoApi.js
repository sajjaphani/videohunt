import sampleJson from './sample2'

class VideoApi {
    static getAll() {
        return sampleJson
    };

    static getVideoByPost(postId) {
        return fetch('http://localhost:3000/api/v1/video' + postId).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default VideoApi;
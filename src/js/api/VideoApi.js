class VideoApi {  
  static getAll() {
        return fetch('http://localhost:3000/api/v1/videos').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
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
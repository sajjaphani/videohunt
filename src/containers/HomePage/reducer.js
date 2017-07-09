import * as types from './constants';

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case types.LOAD_VIDEOS_SUCCESS:
            return action.posts
        case types.POST_NEW_VIDEO:
            const posts = [...state];
            console.log('state',state)
            console.log('New post',action.newPost)
            posts.unshift(action.newPost)
            return posts
        case types.LOAD_VIDEO_BY_POST_SUCCESS:
            return action.video
        default:
            return state; 
    }
} 
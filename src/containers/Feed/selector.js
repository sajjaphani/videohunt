import { createSelector } from 'reselect'

// Input selectors
const getPosts = state => state.posts

export const getAllPosts = createSelector(
    [getPosts], (posts) => {
        //do something on posts (like filter etc) and send the posts list
        if (posts) {
            return posts
        } else {
            return []
        }
    }
)
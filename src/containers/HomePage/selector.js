import { createSelector } from 'reselect'

// Input selectors
const getPosts = state => state.videos

export const getAllPosts = createSelector(
    [getPosts], (posts) => {
        //do something on posts (like filter etc) and send the posts list
        console.log('selector',posts)
        if (posts) {
            return posts
        } else {
            return []
        }
    }
)
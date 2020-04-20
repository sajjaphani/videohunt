import { createSelector } from 'reselect'

import { getLoggedIn } from '../App/selectors.js';

const getPostId = (_, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const getLikes = createSelector([getPost], (post) => (post.get('likes')))

const getLikesCount = createSelector([getLikes], (likes) => {
    const summary = likes.get('summary');
    if (summary) {
        return summary.get('count');
    }

    return 0;
});

const isLiked = createSelector([getLoggedIn, getLikes], (loggedIn, likes) => {
    const summary = likes.get('summary')
    if (summary) {
        return loggedIn && summary.get('has_liked')
    }

    return false
});

export { isLiked, getLikesCount, getLoggedIn }
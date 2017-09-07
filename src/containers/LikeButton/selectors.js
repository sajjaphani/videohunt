import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const getLikes = createSelector([getPost], (post) => (post.get('likes')))

const getUserId = (state) => state.app.get('userId')

const getLikesCount = createSelector([getLikes], (likes) => {
    const summary = likes.get('summary')
    if (summary) {
        return summary.get('count')
    }
    return 0
})

const isLoggedIn = (state) => (state.app.get('loggedIn'))

const isLiked = createSelector([isLoggedIn, getLikes], (loggedIn,likes) => {
    const summary = likes.get('summary')
    if (summary) {
        return loggedIn && summary.get('has_liked')
    }
    return false
})

export { getUserId, isLiked, getLikesCount, isLoggedIn }
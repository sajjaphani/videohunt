import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => {
    return (ownProps.postId)
}

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const getTitle = createSelector([getPost], (post) => post.title)

const getSubtitle = createSelector([getPost], (post) => post.subtitle)

const getURL = createSelector([getPost], (post) => post.url)

export { getPostId, getTitle, getSubtitle, getURL }
import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => {
    return (ownProps.postId)
}

const getPosts = (state) => (state.posts)

const isLoggedIn = (state) => (state.app.get('loggedIn'))

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const defaultExpandComments = (state, ownProps) => (ownProps.expandComments)

const isExpandComments = createSelector([getPost, defaultExpandComments], (post, expandComments) =>
    (expandComments ? expandComments : post.expandComments)
)

export { isExpandComments, isLoggedIn }
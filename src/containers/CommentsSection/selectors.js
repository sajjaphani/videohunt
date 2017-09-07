import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => (ownProps.postId)

const getPosts = (state) => (state.posts)

const isLoggedIn = (state) => (state.app.get('loggedIn'))

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const defaultExpandComments = (state, ownProps) => (ownProps.expandComments)

const isExpandComments = createSelector([getPost, defaultExpandComments], (post, expandComments) =>
    (expandComments ? expandComments : post.get('expandComments'))
)

const getPostComments = createSelector([getPost], (post) => post.getIn(['comments', 'data']))

export { isExpandComments, isLoggedIn, getPostComments }
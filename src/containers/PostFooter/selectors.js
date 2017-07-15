import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const getLikes = createSelector([getPost], (post) => (post.likes))

const getComments = createSelector([getPost], (post) => (post.comments))

export { getLikes, getComments }
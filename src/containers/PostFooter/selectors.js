import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const getLikes = createSelector([getPost], (post) => (post.get('likes')))

const getComments = createSelector([getPost], (post) => (post.get('comments')))

export { getLikes, getComments }
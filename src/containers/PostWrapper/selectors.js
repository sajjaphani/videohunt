import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const isPostExists = createSelector([getPostId, getPosts], (postId, posts) => (posts.has(postId)))

export { isPostExists }
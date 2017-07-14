import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)
const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts],(postId, posts) => (posts.get(postId).toJS()))

export { getPost }
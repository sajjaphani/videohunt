import { createSelector } from 'reselect'

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const getComments = createSelector([getPost], (post) => post.getIn(['comments', 'data']))

const getNextPageUrl = createSelector([getPost], (post) => post.getIn(['comments', 'paging', 'next']))

const hasMoreComments = createSelector([getNextPageUrl], (nextUrl) => (nextUrl ? true : false))

export { getNextPageUrl, hasMoreComments, getComments }
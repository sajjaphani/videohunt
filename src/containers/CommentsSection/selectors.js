import { createSelector } from 'reselect'

import { getLoggedIn, getCurrentUserId } from '../App/selectors.js'

const getPostId = (_, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const defaultExpandComments = (_, props) => (props.expandComments)

const isExpandComments = createSelector([getPost, defaultExpandComments], (post, expandComments) =>
    (expandComments ? expandComments : post.get('expandComments'))
)

export { isExpandComments, getLoggedIn, getCurrentUserId }
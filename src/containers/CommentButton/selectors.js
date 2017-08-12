import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => {
    return (ownProps.postId)
}

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const isExpandComments = createSelector([getPost], (post) => post.get('expandComments'))

const getComments = (state, ownProps) => ownProps.comments.get('data')

const getTotalComments = createSelector([getComments], (comments) => comments.size)

export { isExpandComments, getTotalComments }
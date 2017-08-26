import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => {
    return (ownProps.postId)
}

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

const isExpandComments = createSelector([getPost], (post) => post.get('expandComments'))

const getCommentsSummary = (state, ownProps) => ownProps.comments.get('summary')

const getTotalComments = createSelector([getCommentsSummary], (summary) => 
    summary ? summary.get('count') : 0
)

export { isExpandComments, getTotalComments }
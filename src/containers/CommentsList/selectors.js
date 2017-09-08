import { createSelector } from 'reselect'

const getCommentId = (state, ownProps) => (ownProps.commentId)

const getStateComments = (state) => state.comments

const getPostId = (state, props) => (props.postId)

const getPosts = (state) => (state.posts)

const isComment = (state, ownProps) => ownProps.commentId ? true : false

const getComment = createSelector([getCommentId, getStateComments, isComment], (commentId, comments, isComment) => isComment? comments.get(commentId) : false)  

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId)))

export const getReplies = createSelector([getComment], (comment) => {
    if (!comment) {
        return []
    }
    const replies = comment.get('replies')
    if (replies) {
        return replies.get('data')
    }
    return []
})

const getComments = createSelector([getPost, getReplies, isComment], (post, replies, isComment) => isComment ? replies :  post.getIn(['comments', 'data']))

const getNextPageUrl = createSelector([getPost, getComment, isComment], (post, comment, isComment) => isComment ? comment.getIn(['replies', 'paging', 'next']) : post.getIn(['comments', 'paging', 'next']))

const hasMoreComments = createSelector([getNextPageUrl], (nextUrl) => (nextUrl ? true : false))

export { getNextPageUrl, hasMoreComments, getComments }
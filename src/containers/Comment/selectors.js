import { createSelector } from 'reselect'

const getCommentId = (state, ownProps) => (ownProps.commentId)

const getComments = (state) => state.comments

const getUserId = (state) => state.app.userId

const isLoggedIn = (state) => state.app.loggedIn

const getComment = createSelector([getCommentId, getComments], (commentId, comments) => {
    return comments.get(commentId)
})

const getShowReplyForm = createSelector([getComment], (comment) => {
    const showReplyForm = comment.get('showReplyForm')
    return showReplyForm === undefined ? false : showReplyForm
})

const getCommentText = createSelector([getComment], (comment) => {
    return comment.get('content')
})

const getCommentOn = createSelector([getComment], (comment) => {
    return comment.get('commentedOn')
})

const getTotalReplies = createSelector([getComment], (comment) => {
    const replies = comment.get('replies')
    if(replies) {
        return replies.get('summary').get('count')
    }
    return 0
})

export const getReplies = createSelector([getComment], (comment) => {
    const replies = comment.get('replies')
    if(replies) {
        return replies.get('data').toJS()
    }
    return []
})

export const getShowReplies = createSelector([getComment], (comment) => {
    const showReplies = comment.get('showReplies')
    return showReplies === undefined ? false : showReplies
})

const getUsers = (state) => state.users

const getCommentUser = createSelector([getComment, getUsers], (comment, users) => {
    return users.get(comment.get('userId'))
})

const getUserName = createSelector([getCommentUser], (user) => {
    return user.get('name')
})

const getUserPicture = createSelector([getCommentUser], (user) => user.get('picture') ? user.get('picture') : '/images/man1.png')


export { getCommentText, getCommentOn, getUserName, getUserPicture, getTotalReplies, getShowReplyForm } 
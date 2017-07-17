import { createSelector } from 'reselect'

const getCommentId = (state, ownProps) => (ownProps.commentId)

const getComments = (state) => state.comments

const getUserId = (state) => state.app.userId

const isLoggedIn = (state) => state.app.loggedIn

const getComment = createSelector([getCommentId, getComments], (commentId, comments) => {
    return comments.get(commentId)
})

const getCommentText = createSelector([getComment], (comment) => {
    return comment.get('text')
})

const getUsers = (state) => state.users

const getCommentUser = createSelector([getComment, getUsers], (comment, users) => users.get(comment.get('userId')))

const getUserName = createSelector([getCommentUser], (user) => user.get('name'))

export { getCommentText, getUserName }
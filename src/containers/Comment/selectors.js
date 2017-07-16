import { createSelector } from 'reselect'

const getCommentId = (state, ownProps) => (ownProps.commentId)

const getComments = (state) => state.comments

const getUserId = (state) => state.app.userId

const isLoggedIn = (state) => state.app.loggedIn

const getComment = createSelector([getCommentId, getComments], (commentId, comments) => {
    return comments.get(commentId).toJS()
})

const getUsers = (state) => state.users

const getCommentUser = createSelector([getComment, getUsers], (comment, users) => users.get(comment.userId).toJS())

export { getComment, getCommentUser }
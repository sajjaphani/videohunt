import { createSelector } from 'reselect'

const getCommentId = (state, ownProps) => (ownProps.commentId)

const getComments = (state) => state.comments

export const isLoggedIn = (state) => state.app.get('loggedIn')

const getComment = createSelector([getCommentId, getComments], (commentId, comments) => {
    return comments.get(commentId)
})

export const getShowReplyForm = createSelector([getComment], (comment) => {
    const showReplyForm = comment.get('showReplyForm')
    return showReplyForm === undefined ? false : showReplyForm
})

const getCommentText = createSelector([getComment], (comment) => {
    return comment.get('content')
})

const getCommentOn = createSelector([getComment], (comment) => {
    return comment.get('commentedOn')
})

export const getTotalReplies = createSelector([getComment], (comment) => {
    const replies = comment.get('replies')
    if (replies) {
        return replies.get('summary').get('count')
    }
    return 0
})

export const getTotalLikes = createSelector([getComment], (comment) => {
    const replies = comment.get('likes')
    if (replies) {
        return replies.get('summary').get('count')
    }
    return 0
})

export const hasLiked = createSelector([getComment], (comment) => {
    const replies = comment.get('likes')
    if (replies) {
        return replies.get('summary').get('has_liked')
    }
    return false
})

export const getReplies = createSelector([getComment], (comment) => {
    const replies = comment.get('replies')
    if (replies) {
        return replies.get('data').toJS()
    }
    return []
})

export const isRepliesLoading = createSelector([getComment], (comment) => (
    comment.getIn(['replies', 'loading'])
))

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

const getUserPicture = createSelector([getCommentUser], (user) => {
    const userPicture = user.get('picture')
    if (userPicture) {
        return userPicture
    } else {
        const profileId = user.get('profileId')
        const provider = user.get('provider')
        if (provider === 'facebook') {
            return 'http://graph.facebook.com/' + profileId + '/picture?type=square'
        } else if (provider === 'google') {
            return '/images/man1.png'
        }
        return '/images/man1.png'
    }
})


export { getCommentText, getCommentOn, getUserName, getUserPicture } 
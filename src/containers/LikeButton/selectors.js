import { createSelector } from 'reselect'


const getUserId = (state) => state.app.get('userId')
const getLikes = (state, ownProps) => ownProps.likes
const getLikesCount = createSelector([getLikes], (likes) => {
    const summary = likes.get('summary')
    if (summary) {
        return summary.get('count')
    }
    return 0
})
const isLoggedIn = (state) => (state.app.get('loggedIn'))
const isLiked = createSelector([isLoggedIn, getLikes], (loggedIn,likes) => {
    const summary = likes.get('summary')
    if (summary) {
        return loggedIn && summary.get('has_liked')
    }
    return false
})

export { getUserId, isLiked, getLikesCount, isLoggedIn }
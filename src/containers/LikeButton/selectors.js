import { createSelector } from 'reselect'


const getUserId = (state) => state.app.get('userId')
const getLikes = (state, ownProps) => ownProps.likes
const getLikesCount = createSelector([getLikes], (likes) => likes.size)
const isLoggedIn = (state) => (state.app.get('loggedIn'))
const isLiked = createSelector([isLoggedIn, getUserId, getLikes], (loggedIn, userId, likes) => loggedIn && likes.includes(userId))

export { getUserId, isLiked, getLikesCount }
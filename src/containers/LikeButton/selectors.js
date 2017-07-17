import { createSelector } from 'reselect'


const getUserId = (state) => state.app.get('userId')
const getLikes = (state, ownProps) => ownProps.likes
const getLikesCount = createSelector([getLikes], (likes) => likes.size)
const isLiked = createSelector([getUserId, getLikes], (userId, likes) => likes.includes(userId))

export { getUserId, isLiked, getLikesCount }
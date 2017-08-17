import { createSelector } from 'reselect'

const getProfileId = (state, ownProps) => ownProps.userId

const getUsers = (state) => state.users

const getUser = createSelector([getProfileId, getUsers], (profileId, users) => users.get(profileId))

const getUserName = createSelector([getUser], (user) => user.get('name'))

const getUserPicture = createSelector([getUser], (user) => user.get('picture'))

export { getUserName, getUserPicture }
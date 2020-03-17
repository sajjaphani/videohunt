import { createSelector } from 'reselect'

const getProfileId = (state, ownProps) => ownProps.userId

const getUsers = (state) => state.users

const getUser = createSelector([getProfileId, getUsers], (profileId, users) => {
    if (users)
        return users.get(profileId);

    return null;
})

const getUserName = createSelector([getUser], (user) => {
    if (user) {
        return user.get('name');
    }

    return 'VideoHunt Admin';
});

const getUserPicture = createSelector([getUser], (user) => {
    if (user)
        return user.get('picture');

    return '/images/user.png';
});

export { getUserName, getUserPicture }
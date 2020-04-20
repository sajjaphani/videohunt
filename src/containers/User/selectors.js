import { createSelector } from 'reselect'

const getUsers = (state) => state.users;

const getUserId = (_, props) => props.userId

const getUser = createSelector([getUsers, getUserId], (users, userId) => {
    if (users)
        return users.get(userId);

    return null;
})

const getUserName = createSelector([getUser], (user) => {
    if (user) {
        return user.get('name');
    }

    return 'VideoHunt User';
});

const getUserPicture = createSelector([getUser], (user) => {
    if (user) {
        const picture = user.get('picture') || '/images/user.png';
        return picture;
    }

    return '/images/user.png';
});

export { getUserName, getUserPicture }
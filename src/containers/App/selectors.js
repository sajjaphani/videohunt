import { createSelector } from 'reselect'

const getApp = (state) => (state.app)

export const getCurrentUser = createSelector([getApp], (app) => {
    const currentUser = app.get('currentUser');
    if(currentUser) {
        return currentUser.toJS();
    }

    return currentUser;
});

export const getLoggedIn = createSelector([getCurrentUser], (user) => (user !== null));

export const getCurrentUserId = createSelector([getCurrentUser], (user) => user ? user.id : '');

export const isFetchingAuth = createSelector([getApp], (app) => (app.get('loadingAuth')));

export const getSubscription = createSelector([getApp], (app) => (app.get('subscription')));

export const getSearchResults = createSelector([getApp], (app) => (app.get('searchResults')))

export const getIsLoadingResults = createSelector([getApp], (app) => (app.get('isLoadingResults')))

export const getFeedTopics = createSelector([getApp], (app) => (app.get('feedTopics')))

export const getTagTopics = createSelector([getApp], (app) => (app.get('tagTopics')))

export const getIsHomeSectionClosed = createSelector([getApp], (app) => {
    const userPrefs = app.get('userPrefs');
    if (userPrefs) {
        return userPrefs.get('isHomeSectionClosed');
    }

    return false;
});
import { createSelector } from 'reselect'

const getApp = (state) => (state.app)

export const getLoggedIn = createSelector([getApp], (app) => (app.get('loggedIn')))

// for now this selector just returns user id, but should be enhanced to return proper user object
// this could potentially be reused in all the places that needs user data
export const getUser = createSelector([getApp], (app) => (app.get('userId')))

export const getSubscription = createSelector([getApp], (app) => (app.get('subscription')))

export const getSearchResults = createSelector([getApp], (app) => (app.get('searchResults')))

export const getIsLoadingResults = createSelector([getApp], (app) => (app.get('isLoadingResults')))

export const getFeedTopics = createSelector([getApp], (app) => (app.get('feedTopics')))

export const getTagTopics = createSelector([getApp], (app) => (app.get('tagTopics')))

export const getIsHomeSectionClosed = createSelector([getApp], (app) => {
    const userPrefs = app.get('userPrefs').toJS();
    if (userPrefs) {
        console.log(userPrefs);
        return userPrefs.isHomeSectionClosed;
    }

    return false;
});
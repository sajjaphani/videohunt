import { createSelector } from 'reselect'

const getApp = (state) => (state.app)

export const getLoggedIn = createSelector([getApp], (app) => (app.get('loggedIn')))

// for now this selector just returns user id, but should be enhanced to return proper user object
// this could potentially be reused in all the places that needs user data
export const getUser = createSelector([getApp], (app) => (app.get('userId')))
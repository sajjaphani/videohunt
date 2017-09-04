import { createSelector } from 'reselect'

const getApp = (state) => (state.app)

const getLanguages = createSelector([getApp], (app) => app.get('languages'))

const getFeed = createSelector([getApp], (app) => app.get('feed'))

export { getLanguages, getFeed }
import { createSelector } from 'reselect'
import { getLoggedIn, getSearchResults, getIsLoadingResults, getCurrentUserId } from '../App/selectors'

const getHeader = (state) => (state.header)

const getActiveSelection = createSelector([getHeader], (header) => (header.get('activeSelection')))

const getApp = (state) => state.app

const isLoginLoading = createSelector([getApp], (app) => (app.get('loginLoading')))

const getLoginModalOpen = createSelector([getApp], (app) => app.get('loginModalOpen'))

const getCanCheckLoggedIn = createSelector([getApp], (app) => app.get('currentUser') === null)

export {
    getLoggedIn, getActiveSelection, isLoginLoading, getCurrentUserId,
    getLoginModalOpen, getSearchResults, getIsLoadingResults, getCanCheckLoggedIn
}
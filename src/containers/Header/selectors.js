import { createSelector } from 'reselect'
import { getLoggedIn, getSearchResults, getIsLoadingResults } from '../App/selectors'

const getHeader = (state) => (state.header)

const getActiveSelection = createSelector([getHeader], (header) => (header.get('activeSelection')))

const getApp = (state) => state.app

const isLoginLoading = createSelector([getApp], (app) => (app.get('loginLoading')))

const getLoggedInUserId = createSelector([getApp], (app) => app.get('userId'))

const getLoginModalOpen = createSelector([getApp], (app) => app.get('loginModalOpen'))

export { getLoggedIn, getActiveSelection, isLoginLoading, getLoggedInUserId, getLoginModalOpen, getSearchResults, getIsLoadingResults }
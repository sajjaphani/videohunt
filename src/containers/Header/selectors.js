import { createSelector } from 'reselect'
import { getLoggedIn } from '../App/selectors'

const getHeader = (state) => (state.header)

const getActiveSelection = createSelector([getHeader], (header) => (header.get('activeSelection')))

const getApp = (state) => state.app

const isLoginLoading = createSelector([getApp], (app) => (app.get('loginLoading')))

const getLoggedInUserId = createSelector([getApp], (app) => app.get('userId'))

export { getLoggedIn, getActiveSelection, isLoginLoading, getLoggedInUserId }
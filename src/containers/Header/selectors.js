import { createSelector } from 'reselect'
import { getLoggedIn } from '../App/selectors'

const getHeader = (state) => (state.header)

const getActiveSelection = createSelector([getHeader], (header) => (header.get('activeSelection'))) 

export { getLoggedIn, getActiveSelection }
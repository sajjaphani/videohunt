import { createSelector } from 'reselect'

// Input selectors
const getFeed = state => (state.feed.keySeq().toArray())


export { getFeed }
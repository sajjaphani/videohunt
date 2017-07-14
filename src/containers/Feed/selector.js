import { createSelector } from 'reselect'

// Input selectors
const getFeed = state => (state.feed.keySeq().toArray().sort((a, b) => {
    const dateA = new Date(a)
    const dateB = new Date(b)
    if (dateA < dateB) {
        return 1
    } else if (dateA > dateB) {
        return -1
    } else if (dateA == dateB) {
        return 0
    }
}))


export { getFeed }
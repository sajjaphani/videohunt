import { createSelector } from 'reselect'

// Input selector
const getFeedIds = state => state.feed

const getFeed = createSelector([getFeedIds], (feed) => {
    const feedData = feed.get('data')
    if (feedData)
        return feedData.keySeq().toArray().sort((a, b) => {
            const dateA = new Date(a)
            const dateB = new Date(b)
            if (dateA < dateB) {
                return 1
            } else if (dateA > dateB) {
                return -1
            } else if (dateA == dateB) {
                return 0
            }
        })
    else
        return []
})

export { getFeed }
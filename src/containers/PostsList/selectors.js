import { createSelector } from 'reselect'

const getFeed = (state, ownProps) => (state.feed)
const getFeedDate = (state, ownProps) => (ownProps.feedDate)

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => feed.get(feedDate).sort((a, b) => {
     const dateA = new Date(a)
    const dateB = new Date(b)
    if (dateA < dateB) {
        return 1
    } else if (dateA > dateB) {
        return -1
    } else if (dateA == dateB) {
        return 0
    }
}).toJS())

export { getPostIds }
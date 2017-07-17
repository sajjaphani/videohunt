import { createSelector } from 'reselect'

const getFeed = (state, ownProps) => (state.feed)
const getFeedDate = (state, ownProps) => (ownProps.feedDate)

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => {
    return feed.get(feedDate)
})

export { getPostIds }
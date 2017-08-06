import { createSelector } from 'reselect'

const getFeed = (state, ownProps) => (state.feed.get('data'))
const getFeedDate = (state, ownProps) => (ownProps.date)

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => {
    return feed.get(feedDate)
})

export { getPostIds }
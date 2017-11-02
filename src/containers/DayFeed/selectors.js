import { createSelector } from 'reselect'

const getFeedDate = (state, ownProps) => (ownProps.date)

const getFeedState = (state) => (state.feed)

const getFeedCategory = (state, ownProps) => ownProps.category

const getFeed = createSelector([getFeedState,getFeedCategory],(feedState, category)=> feedState.getIn([category,'data']))

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => {
    return feed.get(feedDate)
})

export { getPostIds }
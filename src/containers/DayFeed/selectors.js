import { createSelector } from 'reselect'

const getApp = state => state.app

const getFeedDate = (state, ownProps) => (ownProps.date)

const getFeedState = (state) => (state.feed)

const getFeedCategory = createSelector([getApp], (app) => (app.get('feed')))

const getFeed = createSelector([getFeedState,getFeedCategory],(feedState, category)=> feedState.getIn([category,'data']))

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => {
    return feed.get(feedDate)
})

export { getPostIds }
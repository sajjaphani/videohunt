import { createSelector } from 'reselect'

const getFeedDate = (_, props) => (props.date)

const getFeedState = (state) => (state.feed)

const getFeedCategory = (_, props) => props.category

const getFeed = createSelector([getFeedState, getFeedCategory], (feedState, category) => feedState.getIn([category, 'data']))

const getPostIds = createSelector([getFeedDate, getFeed], (feedDate, feed) => {
    return feed.get(feedDate)
})

export { getPostIds }
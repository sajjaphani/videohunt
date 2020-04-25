import { createSelector } from 'reselect'

const getFeedState = (state) => (state.feed)

const getFeedCategory = (_, props) => props.category

const getFeed = createSelector([getFeedState, getFeedCategory], (feedState, category) => feedState.getIn([category, 'data']))

const getPostIds = createSelector([getFeed], (feed) => {
    return feed.get('postIds');
})

export { getPostIds }
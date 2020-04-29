import { createSelector } from 'reselect'

const getFeedState = (state) => (state.feed)

const getFeedTopicId = (_, props) => props.topicId

const getFeed = createSelector([getFeedState, getFeedTopicId], (feedState, topicId) => feedState.getIn([topicId, 'data']))

const getPostIds = createSelector([getFeed], (feed) => {
    return feed.get('postIds');
})

export { getPostIds }
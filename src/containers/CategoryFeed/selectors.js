import { createSelector } from 'reselect'

import { getFeedTopics } from '../App/selectors';

const getFeedState = (state) => state.feed

const getFeedCategory = (_, props) => props.feed

const getPostIds = createSelector([getFeedState, getFeedCategory], (feedState, category) => {
    const categoryFeed = feedState.getIn([category])
    if (categoryFeed) {
        return categoryFeed.getIn(['data', 'postIds']).toJS();
    }

    return [];
})

const getPagination = createSelector([getFeedState, getFeedCategory], (feed, category) => {
    const paginationData = feed.getIn([category, 'pagination'])
    if (paginationData) {
        return paginationData.get('next');
    } else {
        return '';
    }
});

const getInitializing = createSelector([getFeedState, getFeedCategory], (feed, category) => {
    const initData = feed.getIn([category, 'init']);
    if (initData) {
        return initData.get('initializing');
    } else {
        return true;
    }
});

const getFeedName = createSelector([getFeedTopics, getFeedCategory], (topics, category) => {
    if (!topics) {
        return ''
    }

    const topic = topics.find(_topic => _topic._id === category)
    return topic.name;
});

const getFeedImage = createSelector([getFeedTopics, getFeedCategory], (topics, category) => {
    if (!topics) {
        return '/images/topics/discovery.jpg'
    }

    const topic = topics.find(_topic => _topic._id === category)
    return topic.image || '/images/topics/discovery.jpg';
});

export { getPostIds, getPagination, getInitializing, getFeedName, getFeedImage }
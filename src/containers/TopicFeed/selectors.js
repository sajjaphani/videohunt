import { createSelector } from 'reselect'

import { getFeedTopics } from '../App/selectors';

const getFeedState = (state) => state.feed

const getFeedTopicId = (_, props) => props.topicId

const getPostIds = createSelector([getFeedState, getFeedTopicId], (feedState, topicId) => {
    const topicFeed = feedState.getIn([topicId])
    if (topicFeed) {
        return topicFeed.getIn(['data', 'postIds']).toJS();
    }

    return [];
});

const getPagination = createSelector([getFeedState, getFeedTopicId], (feed, topicId) => {
    const paginationData = feed.getIn([topicId, 'pagination'])
    if (paginationData) {
        return paginationData.get('next');
    } else {
        return '';
    }
});

const getInitializing = createSelector([getFeedState, getFeedTopicId], (feed, topicId) => {
    const initData = feed.getIn([topicId, 'init']);
    if (initData) {
        return initData.get('initializing');
    } else {
        return true;
    }
});

const getFeedName = createSelector([getFeedTopics, getFeedTopicId], (topics, topicId) => {
    if (!topics) {
        return ''
    }

    const topic = topics.find(_topic => _topic.id === topicId)
    return topic ? topic.name : 'Not Found';
});

const getFeedImage = createSelector([getFeedTopics, getFeedTopicId], (topics, topicId) => {
    if (!topics) {
        return '/images/topics/discovery.jpg'
    }

    const topic = topics.find(_topic => _topic.id === topicId)
    return topic && topic.image ? topic.image : '/images/topics/discovery.jpg';
});

export { getPostIds, getPagination, getInitializing, getFeedName, getFeedImage }
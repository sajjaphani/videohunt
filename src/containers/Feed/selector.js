import { createSelector } from 'reselect'

// Input selector
const getFeedIds = state => state.feed

const getFeedTopicId = (_, props) => (props.topicId)

const getHasFeed = createSelector([getFeedIds, getFeedTopicId], (feed, topicId) => {
    const feedData = feed.getIn([topicId, 'data']);
    if (!feedData) {
        return false;
    }
    
    return feedData.get('postIds') && feedData.get('postIds').size > 0;
});

const getPagination = createSelector([getFeedIds, getFeedTopicId], (feed, topicId) => {
    const paginationData = feed.getIn([topicId, 'pagination']);
    if (paginationData) {
        return paginationData.get('next');
    } else {
        return '';
    }
});

const getInitializing = createSelector([getFeedIds, getFeedTopicId], (feed, topicId) => {
    const initData = feed.getIn([topicId, 'init']);
    if (initData) {
        return initData.get('initializing');
    } else {
        return true;
    }
});

export { getHasFeed, getPagination, getInitializing }
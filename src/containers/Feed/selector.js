import { createSelector } from 'reselect'

// Input selector
const getFeedIds = state => state.feed

const getFeedCategory = (_, props) => (props.category)

const getHasFeed = createSelector([getFeedIds, getFeedCategory], (feed, category) => {
    const feedData = feed.getIn([category, 'data']);
    if (!feedData) {
        return false;
    }
    
    return feedData.get('postIds') && feedData.get('postIds').size > 0;
});

const getPagination = createSelector([getFeedIds, getFeedCategory], (feed, category) => {
    const paginationData = feed.getIn([category, 'pagination']);
    if (paginationData) {
        return paginationData.get('next');
    } else {
        return '';
    }
});

const getInitializing = createSelector([getFeedIds, getFeedCategory], (feed, category) => {
    const initData = feed.getIn([category, 'init']);
    if (initData) {
        return initData.get('initializing');
    } else {
        return true;
    }
});

export { getHasFeed, getPagination, getInitializing }
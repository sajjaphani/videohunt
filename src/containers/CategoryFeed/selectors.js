import { createSelector } from 'reselect'

const getFeedState = (state) => state.feed

const getFeedCategory = (state, ownProps) => ownProps.feed

const getPostIds = createSelector([getFeedState, getFeedCategory],(feedState, category) => {
    const categoryFeed = feedState.getIn([category])
    if(categoryFeed){
        return categoryFeed.getIn(['data','postIds']).toJS()
    }
    return categoryFeed
})

const getPagination = createSelector([getFeedState, getFeedCategory], (feed, category) => {
    const paginationData = feed.getIn([category,'pagination'])
    if (paginationData) {
        return paginationData.get('next')
    }
    else
        return ''
})

export { getPostIds, getPagination }
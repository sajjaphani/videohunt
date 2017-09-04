import { createSelector } from 'reselect'

const getApp = (state) => (state.app)
const getFeedState = (state) => state.feed

const getLanguages = createSelector([getApp], (app) => {
    return app.get('languages')
})

const getFeedCategory = createSelector([getApp], (app) => {
    return app.get('feed')
})

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

export { getLanguages, getFeedCategory, getPostIds, getPagination }
import { createSelector } from 'reselect'

const getApp = state => state.app
// Input selector
const getFeedIds = state => state.feed

const getFeedCategory = createSelector([getApp], (app) => (app.get('feed')))

const getFeed = createSelector([getFeedIds, getFeedCategory], (feed, category) => {
    const feedData = feed.getIn([category,'data'])
    if (feedData)
        return feedData.keySeq().toArray().sort((a, b) => {
            const dateA = new Date(a)
            const dateB = new Date(b)
            if (dateA < dateB) {
                return 1
            } else if (dateA > dateB) {
                return -1
            } else if (dateA == dateB) {
                return 0
            }
        })
    else
        return []
})

const getPagination = createSelector([getFeedIds, getFeedCategory], (feed, category) => {
    const paginationData = feed.getIn([category,'pagination'])
    if (paginationData) {
        return paginationData.get('next')
    }
    else
        return ''
})

export { getFeed, getPagination, getFeedCategory }
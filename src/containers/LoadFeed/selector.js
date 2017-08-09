import { createSelector } from 'reselect'

const getFeed = state => state.feed

const getPagination = createSelector([getFeed], (feed) => {
    const paginationData = feed.get('pagination')
    if (paginationData) {
        return paginationData.get('next')
    }
    else
        return ''
})

export { getPagination }
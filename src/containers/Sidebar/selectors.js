import { createSelector } from 'reselect'


const getApp = (state) => state.app

const getCategoryType = (state, ownProps) => ownProps.categoryType

const getActiveItem = createSelector([getCategoryType, getApp], (categoryType, app) => {
    const activeItem = app.get(categoryType)
    if (activeItem) {
        return activeItem
    }

    return 'all'
})

export { getActiveItem }
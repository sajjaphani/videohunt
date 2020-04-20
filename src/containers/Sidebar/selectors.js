import { createSelector } from 'reselect'

import { getFeedTopics } from '../App/selectors.js'

const getApp = (state) => state.app

const getCategoryType = (_, props) => props.categoryType

const getActiveItem = createSelector([getCategoryType, getApp], (categoryType, app) => {
    const activeItem = app.get(categoryType)
    if (activeItem) {
        return activeItem;
    }

    return 'all';
})

export { getActiveItem, getFeedTopics }
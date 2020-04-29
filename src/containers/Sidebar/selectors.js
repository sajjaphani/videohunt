import { createSelector } from 'reselect'

import { getFeedTopics } from '../App/selectors.js'

const getApp = (state) => state.app

const getSidebarItemType = (_, props) => props.sidebarItemType

const getActiveItem = createSelector([getSidebarItemType, getApp], (sidebarItemType, app) => {
    const activeItem = app.get(sidebarItemType)
    if (activeItem) {
        return activeItem;
    }

    return 'all';
})

export { getActiveItem, getFeedTopics }
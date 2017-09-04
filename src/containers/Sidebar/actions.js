import { SELECT_SIDEBAR_ITEM } from './constants'

function selectSidebarItem(itemType, itemName) {
    return {
        type: SELECT_SIDEBAR_ITEM,
        payload: {
            itemType,
            itemName
        }
    }
}

export { selectSidebarItem }
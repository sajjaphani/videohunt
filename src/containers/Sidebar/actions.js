import { push } from 'react-router-redux'

import { SELECT_SIDEBAR_ITEM } from './constants'

function selectSidebarItem(itemType, itemName) {
    return function (dispatch) {
        dispatch(sidebarSelectAction(itemType, itemName))
        if (itemType === 'feed') {
            if (itemName === 'all') {
                dispatch(push('/'))
            } else {
                dispatch(push('/topics/' + itemName))
            }
        } else if (itemType === 'languages') {
            // TODO: need to revisit when languages are handled            
        }
    }
}

function sidebarSelectAction(itemType, itemName) {
    return {
        type: SELECT_SIDEBAR_ITEM,
        payload: {
            itemType,
            itemName
        }
    }
}


export { selectSidebarItem, sidebarSelectAction }
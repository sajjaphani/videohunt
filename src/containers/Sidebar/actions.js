import { push } from 'react-router-redux'

import { SELECT_SIDEBAR_ITEM } from './constants'

function selectSidebarItem(itemType, itemName) {
    return function (dispatch) {
        dispatch(
            {
                type: SELECT_SIDEBAR_ITEM,
                payload: {
                    itemType,
                    itemName
                }
            }
        )
        if (itemName == 'All') {
            dispatch(push('/'))
        } else {
            dispatch(push('/topics/' + itemName))
        }
    }
}

export { selectSidebarItem }
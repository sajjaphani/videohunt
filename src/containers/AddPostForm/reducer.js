import * as Types from './constants';
import { fromJS } from 'immutable'

const initialState = {
}

export const newPostReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.CHECK_ADD_NEW_VIDEO_SUCCESS:
            return state.set('data', fromJS(action.payload))
        case Types.CHECK_ADD_NEW_VIDEO_DUPLICATE: {
            let newState = state.set('error-data', undefined)
            return newState.set('duplicate-data', fromJS(action.payload))
        }
        case Types.CHECK_ADD_NEW_VIDEO_FAILURE: {
            let newState = state.set('duplicate-data', undefined)
            return newState.set('error-data', fromJS(action.payload))
        }
        default:
            return state;
    }
}
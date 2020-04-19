import { fromJS } from 'immutable'

import * as Types from './constants';

const initialState = {
}

export const newPostReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.CHECK_ADD_NEW_VIDEO_SUCCESS:
            return state.set('data', fromJS(action.payload))
        case Types.CHECK_ADD_NEW_VIDEO_FAILURE: {
            return state.set('errorData', fromJS(action.payload))
        }
        default:
            return state;
    }
}
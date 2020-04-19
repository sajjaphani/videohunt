import * as Types from './constants';
import { fromJS } from 'immutable'

const initialState = {
    postId: null,
    loading: false,
    posts: []
}

export const upNextReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.LOAD_RECOMMENDATIONS:
            let { postId } = action.payload;
            let tempState = state.setIn(['postId'], postId);
            tempState = tempState.setIn(['posts'], fromJS([]));
            return tempState.setIn(['loading'], true);
        case Types.LOAD_RECOMMENDATIONS_SUCCESS: {
            let { payload } = action
            let tempState = state.setIn(['loading'], false);
            return tempState.setIn(['posts'], fromJS(payload));
        }
        default:
            return state;
    }
}

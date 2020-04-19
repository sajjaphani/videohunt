import * as ActionTypes from './constants';

import { loadTagTopics } from '../App/actions';

export const addNewVideoPost = (post) => {
    return {
        type: ActionTypes.ADD_NEW_VIDEO,
        payload: post
    }
}

export function redirectToFirstPage() {
    return {
        type: ActionTypes.ADD_NEW_VIDEO_REDIRECT
    }
}

export function backToPrevPage() {
    return {
        type: ActionTypes.ADD_NEW_VIDEO_GO_BACK
    }
}

export { loadTagTopics }
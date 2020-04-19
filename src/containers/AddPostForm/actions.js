import * as ActionTypes from './constants';

export const checkAddNewVideoPost = (post) => {
    return {
        type: ActionTypes.CHECK_ADD_NEW_VIDEO,
        payload: post
    }
}

export function backToHomePage() {
    return {
        type: ActionTypes.BACK_TO_HOME_PAGE
    }
}
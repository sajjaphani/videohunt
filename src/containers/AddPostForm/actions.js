import * as ActionTypes from './constants';

export const checkAddNewVideoPost = (post) => {
    return {
        type: ActionTypes.CHECK_ADD_NEW_VIDEO,
        payload: post
    }
} 

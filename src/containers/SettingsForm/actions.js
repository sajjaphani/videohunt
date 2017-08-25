import * as ActionTypes from './constants';

export const updateSettings = (settings) => {
    return {
        type: ActionTypes.UPDATE_SETTINGS,
        payload: settings
    }
} 
import * as ActionTypes from './constants';

export const handleProfileHeader = (settings) => {
    return {
        type: ActionTypes.PROFILE_HEADER,
        payload: settings
    }
}   

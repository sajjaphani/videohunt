import * as ActionTypes from './constants';

export const handleProfileSection = (settings) => {
    return {
        type: ActionTypes.PROFILE_SECTION,
        payload: settings
    }
} 
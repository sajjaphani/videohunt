import * as ActionTypes from './constants';

export const handleProfileSidebar = (settings) => {
    return {
        type: ActionTypes.PROFILE_SIDEBAR,
        payload: settings
    }
} 

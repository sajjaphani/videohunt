import { fromJS } from 'immutable'

import * as ActionTypes from './constants'

const USER_PREFS = '__USER_PREFS';

const initState = {
    currentUser: null,
    fetchingSession: false,
    subscription: null,
    loginLoading: false,
    loginModalOpen: false,
    languages: 'all',
    feed: 'all',
    feedTopics: null,
    tagTopics: null,
    userPrefs: {},
}

export const appReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case ActionTypes.SELECT_SIDEBAR_ITEM_SUCCESS:
            const { itemType, itemName } = action.payload
            return state.set(itemType, itemName)
        case ActionTypes.LOGIN_REQUEST_SUCCESS:
            return state.set('loginLoading', false)
        case ActionTypes.LOGIN_REQUEST:
            return state.set('loginLoading', true)
        case ActionTypes.LOGIN_MODAL_OPEN:
            return state.set('loginModalOpen', true)
        case ActionTypes.LOGIN_MODAL_CLOSE:
            return state.set('loginModalOpen', false)
        case ActionTypes.ADD_SUBSCRIPTION_SUCCESS:
            return state.set('subscription', action.payload)
        case ActionTypes.SEARCH_POSTS:
            return state.set('isLoadingResults', true)
        case ActionTypes.SEARCH_POSTS_SUCCESS:
            let _state = state.set('isLoadingResults', false)
            return _state.set('searchResults', action.payload.data)
        case ActionTypes.LOAD_FEED_TOPICS_SUCCESS:
            return state.setIn(['feedTopics'], action.payload.data)
        case ActionTypes.LOAD_TAG_TOPICS_SUCCESS:
            return state.set('tagTopics', action.payload.data)
        case ActionTypes.HANDLE_HEAD_SECTION_DISMISS:
            let prefs = { isHomeSectionClosed: true };
            localStorage.setItem(USER_PREFS, btoa(JSON.stringify(prefs)));
            return state.set('userPrefs', fromJS(prefs));
        case ActionTypes.LOAD_USER_PREFERENCES:
            const _prefs = localStorage.getItem(USER_PREFS);
            if (_prefs) {
                try {
                    const userPrefs = JSON.parse(atob(_prefs));
                    return state.set('userPrefs', fromJS(userPrefs));
                } catch (err) {
                    // Do nothing
                }
            }
            return state.set('userPrefs', fromJS({}));
        case ActionTypes.GET_USER_SESSION:
            return state.set('fetchingSession', true);
        case ActionTypes.GET_USER_SESSION_SUCCESS:
            let tmpState = state.set('fetchingSession', false);
            return tmpState.set('currentUser', action.payload ? fromJS(action.payload) : null);
        default:
            return state;
    }
}

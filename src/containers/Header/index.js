import { connect } from 'react-redux'

import Header from '../../components/Header'

import { getUserSession } from '../App/actions';
import {
    changeSelection, handleLogin, handleLogout, openLogin,
    handleProfile, handleSettings, handleTextSearch, changeRoute
} from './actions'
import {
    getLoggedIn, getActiveSelection, isLoginLoading, getCurrentUserId,
    getLoginModalOpen, getSearchResults, getIsLoadingResults, getCanCheckLoggedIn
} from './selectors'

const mapStateToProps = (state, _) => {
    return {
        activeSelection: getActiveSelection(state),
        canCheckLoggedIn: getCanCheckLoggedIn(state),
        loggedIn: getLoggedIn(state),
        loginLoading: isLoginLoading(state),
        loggedInUserId: getCurrentUserId(state),
        loginModalOpen: getLoginModalOpen(state),
        searchResults: getSearchResults(state),
        isLoadingResults: getIsLoadingResults(state)
    }
}

export default connect(mapStateToProps, {
    changeSelection,
    handleLogin,
    handleLogout,
    openLogin: openLogin,
    handleProfile,
    handleSettings,
    handleTextSearch,
    changeRoute,
    getUserSession,
})(Header)
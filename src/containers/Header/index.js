import { connect } from 'react-redux'
import Header from '../../components/Header'
import { changeSelection, handleLogin, handleLogout, openLogin, handleProfile, handleSettings, handleTextSearch, changeRoute } from './actions'
import { getLoggedIn, getActiveSelection, isLoginLoading, getLoggedInUserId, getLoginModalOpen, getSearchResults, getIsLoadingResults } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        activeSelection: getActiveSelection(state),
        loggedIn: getLoggedIn(state),
        loginLoading: isLoginLoading(state),
        loggedInUserId: getLoggedInUserId(state),
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
    changeRoute
})(Header)
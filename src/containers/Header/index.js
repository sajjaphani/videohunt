import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { changeSelection, handleLogin, handleLogout, openLogin, handleProfile, handleSettings } from './actions'
import { getLoggedIn, getActiveSelection, isLoginLoading, getLoggedInUserId, getLoginModalOpen } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        activeSelection: getActiveSelection(state),
        loggedIn: getLoggedIn(state),
        loginLoading: isLoginLoading(state),
        loggedInUserId: getLoggedInUserId(state),
        loginModalOpen: getLoginModalOpen(state)
    }
}

export default connect(mapStateToProps, {
    changeSelection,
    handleLogin,
    handleLogout,
    openLogin: openLogin,
    handleProfile,
    handleSettings
})(Header)
import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { changeSelection, handleLogin, handleLogout } from './actions'
import { getLoggedIn, getActiveSelection, isLoginLoading, getLoggedInUserId, hand } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        activeSelection: getActiveSelection(state),
        loggedIn: getLoggedIn(state),
        loginLoading: isLoginLoading(state),
        loggedInUserId: getLoggedInUserId(state),
    }
}

export default connect(mapStateToProps, {
    changeSelection,
    handleLogin,
    handleLogout
})(Header)
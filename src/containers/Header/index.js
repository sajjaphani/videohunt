import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { changeSelection, handleLogin } from './actions'
import { getLoggedIn, getActiveSelection, isLoginLoading } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        activeSelection: getActiveSelection(state),
        loggedIn: getLoggedIn(state),
        loginLoading: isLoginLoading(state)
    }
}

export default connect(mapStateToProps, {
    changeSelection,
    handleLogin
})(Header)
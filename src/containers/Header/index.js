import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { changeSelection, handleLogin } from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
        activeSelection: state.header.activeSelection,
        loggedIn: state.header.loggedIn
    }
}

export default connect(mapStateToProps, {
    changeSelection,
    handleLogin
})(Header)
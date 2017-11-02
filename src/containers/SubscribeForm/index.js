import React from 'react'
import { connect } from 'react-redux'

import SubscribeForm from '../../components/SubscribeForm'
import { getLoggedIn } from './selectors.js'

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: getLoggedIn(state)
    }
}

export default connect(mapStateToProps, {
    
})(SubscribeForm)
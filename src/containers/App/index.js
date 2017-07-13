import React from 'react'
import { connect } from 'react-redux'

import App from '../../components/App'
import { getLoggedIn, getUser, getRoute} from './selectors'

const mapStateToProps = (state) => {
    return { 
        loggedIn: getLoggedIn(state),
        user: getUser(state)
     }
}

export default connect(mapStateToProps,{

})(App)
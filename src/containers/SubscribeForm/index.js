import { connect } from 'react-redux'

import { addSubscription } from './actions'

import SubscribeForm from '../../components/SubscribeForm'
import { getLoggedIn, getSubscription } from './selectors.js'

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: getLoggedIn(state),
        subscription: getSubscription(state)
    }
}

export default connect(mapStateToProps, { addSubscription })(SubscribeForm)
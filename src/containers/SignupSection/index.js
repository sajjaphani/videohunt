import { connect } from 'react-redux'

import SignupSection from '../../components/SignupSection'
import { getLoggedIn, getIsHomeSectionClosed } from './selectors.js'
import { handleHeadSectionDismiss } from '../App/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: getLoggedIn(state),
        isHomeSectionClosed: getIsHomeSectionClosed(state),
    }
}

export default connect(mapStateToProps, {
    handleHeadSectionDismiss
})(SignupSection);

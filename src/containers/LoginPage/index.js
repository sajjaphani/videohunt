import { connect } from 'react-redux'

import LoginSection from '../../components/LoginSectionWrapper';

import { getLoggedIn } from './selectors.js';
import { handleLogin, backToHomePage } from './actions';

const mapStateToProps = (state, _) => {
    return {
        loggedIn: getLoggedIn(state),
    }
}

export default connect(mapStateToProps, {
    handleLogin, backToHomePage
})(LoginSection)
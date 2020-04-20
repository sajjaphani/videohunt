import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { isPostExists } from './selectors'
import * as actions from './actions'
import PostWrapper from '../../components/PostWrapper'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        postExists: isPostExists(state, props),
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostWrapper)
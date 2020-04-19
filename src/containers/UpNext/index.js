import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getIsLoading, getPosts, getInitialized } from './selectors'
import * as actions from './actions'

import UpNext from '../../components/UpNext'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        initialized: getInitialized(state),
        isLoading: getIsLoading(state),
        posts: getPosts(state),
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpNext)
import { connect } from 'react-redux'

import CommentsSection from '../../components/CommentsSection'
import { isExpandComments, getLoggedIn, getCurrentUserId } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        expandComments: isExpandComments(state, props),
        loggedIn: getLoggedIn(state),
        currentUserId: getCurrentUserId(state)
    }
}

export default connect(mapStateToProps, {

})(CommentsSection)
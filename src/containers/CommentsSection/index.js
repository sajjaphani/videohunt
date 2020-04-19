import { connect } from 'react-redux'

import CommentsSection from '../../components/CommentsSection'
import { isExpandComments, isLoggedIn, getCurrentUserId } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        expandComments: isExpandComments(state, ownProps),
        loggedIn: isLoggedIn(state),
        currentUserId: getCurrentUserId(state)
    }
}

export default connect(mapStateToProps, {

})(CommentsSection)
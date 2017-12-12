import { connect } from 'react-redux'
import CommentsSection from '../../components/CommentsSection'
import { isExpandComments, isLoggedIn } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        expandComments: isExpandComments(state, ownProps),
        loggedIn: isLoggedIn(state),
    }
}

export default connect(mapStateToProps, {

})(CommentsSection)
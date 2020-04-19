import { connect } from 'react-redux'

import Comment from '../../components/Comment'
import { addComment, addReply } from './actions'
import { getUserId } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        userId: getUserId(state),
        hidden: ownProps.hidden,
        showForm: ownProps.showForm,
        commentId: ownProps.commentId,
        parentCommentId: ownProps.parentCommentId,
        currentUserId: ownProps.currentUserId
    }
}

export default connect(mapStateToProps, {
    addComment,
    addReply
})(Comment.Form)
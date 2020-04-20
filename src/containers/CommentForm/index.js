import { connect } from 'react-redux'

import Comment from '../../components/Comment'
import { addComment, addReply } from './actions'
import { getCurrentUserId } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        userId: getCurrentUserId(state),
        hidden: props.hidden,
        showForm: props.showForm,
        commentId: props.commentId,
        parentCommentId: props.parentCommentId,
        currentUserId: props.currentUserId
    }
}

export default connect(mapStateToProps, {
    addComment,
    addReply
})(Comment.Form)
import React from 'react'
import { connect } from 'react-redux'

import Comment from '../../components/Comment'
import { addComment, addReply } from './actions'
import { getUserId } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        userId: getUserId(state),
        hidden: ownProps.hidden,
        commentId: ownProps.commentId
    }
}

export default connect(mapStateToProps, {
    addComment,
    addReply
})(Comment.Form)
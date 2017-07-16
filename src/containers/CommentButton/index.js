import React from 'react'
import { connect } from 'react-redux'
import CommentButton from '../../components/CommentButton'
import { toggleComment } from './actions'
import { isExpandComments } from './selectors'

const mapStateToProps = (state, ownProps) => {
    const { postId, comments } = ownProps
    return {
        postId: postId,
        comments: comments,
        expandComments: isExpandComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {
    toggleComment
})(CommentButton)

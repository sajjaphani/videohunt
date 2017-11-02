import React from 'react'
import { connect } from 'react-redux'
import CommentButton from '../../components/CommentButton'
import { toggleComment } from './actions'
import { isExpandComments, getTotalComments } from './selectors'

const mapStateToProps = (state, ownProps) => {
    const { postId } = ownProps
    return {
        postId: postId,
        commentNo: getTotalComments(state,ownProps),
        expandComments: isExpandComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {
    toggleComment
})(CommentButton)

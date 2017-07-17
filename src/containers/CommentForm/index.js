import React from 'react'
import { connect } from 'react-redux'

import CommentForm from '../../components/CommentForm'
import { addComment } from './actions'
import { getUserId } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        userId: getUserId(state)
    }
}

export default connect(mapStateToProps, {
    addComment
})(CommentForm)
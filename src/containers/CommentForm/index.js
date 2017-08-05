import React from 'react'
import { connect } from 'react-redux'

import Comment from '../../components/Comment'
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
})(Comment.Form)
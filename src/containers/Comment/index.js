import React from 'react'
import { connect } from 'react-redux'
import { getComment, getCommentUser } from './selectors'
import Comment from '../../components/Comment'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        comment: getComment(state, ownProps),
        user: getCommentUser(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(Comment)
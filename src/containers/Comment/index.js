import React from 'react'
import { connect } from 'react-redux'
import { getCommentText, getUserName, getUserPicture } from './selectors'
import Comment from '../../components/Comment'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        commentText: getCommentText(state, ownProps),
        userName: getUserName(state, ownProps),
        userPicture: getUserPicture(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(Comment)
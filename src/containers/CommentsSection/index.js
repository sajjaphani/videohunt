import React from 'react'
import { connect } from 'react-redux'
import CommentsSection from '../../components/CommentsSection'
import { isExpandComments, getPostComments, isLoggedIn } from './selectors'

const mapStateToProps = (state, ownProps) => {
    const { postId, expandComments, comments } = ownProps
    return {
        postId: ownProps.postId,
        expandComments: isExpandComments(state, ownProps),
        comments: comments,
        loggedIn: isLoggedIn(state)
    }
}

export default connect(mapStateToProps, {

})(CommentsSection)
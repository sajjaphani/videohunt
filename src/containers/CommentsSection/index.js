import React from 'react'
import { connect } from 'react-redux'
import CommentsSection from '../../components/CommentsSection'
import { isExpandComments, isLoggedIn, getPostComments } from './selectors'

const mapStateToProps = (state, ownProps) => {
    const { postId, expandComments } = ownProps
    return {
        postId: ownProps.postId,
        expandComments: isExpandComments(state, ownProps),
        comments: getPostComments(state, ownProps),
        loggedIn: isLoggedIn(state),
        // nextPageUrl: getNextCommentsPage(state)
    }
}

export default connect(mapStateToProps, {

})(CommentsSection)
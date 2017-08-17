import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Selectors from './selectors'
import CommentItem from '../../components/CommentItem'
import * as actions from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        commentText: Selectors.getCommentText(state, ownProps),
        commentedOn: Selectors.getCommentOn(state, ownProps),
        userName: Selectors.getUserName(state, ownProps),
        userPicture: Selectors.getUserPicture(state, ownProps),
        totalReplies: Selectors.getTotalReplies(state, ownProps),
        commentId: ownProps.commentId,
        isShowReplyForm: Selectors.getShowReplyForm(state, ownProps),
        isShowReplies: Selectors.getShowReplies(state, ownProps),
        replies: Selectors.getReplies(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CommentItem from '../../components/CommentItem'

import * as Selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        commentText: Selectors.getCommentText(state, props),
        commentedOn: Selectors.getCommentOn(state, props),
        userName: Selectors.getUserName(state, props),
        userPicture: Selectors.getUserPicture(state, props),
        totalReplies: Selectors.getTotalReplies(state, props),
        commentId: props.commentId,
        commentAuthorId: Selectors.getCommentAuthorId(state, props),
        commentAuthorName: Selectors.getUserName(state, props),
        commentMentionName: Selectors.getMentionUserName(state, props),
        isShowReplyForm: Selectors.getShowReplyForm(state, props),
        isShowReplies: Selectors.getShowReplies(state, props),
        replies: Selectors.getReplies(state, props),
        isLoggedIn: Selectors.getLoggedIn(state),
        totalLikes: Selectors.getTotalLikes(state, props),
        hasLiked: Selectors.hasLiked(state, props),
        isRepliesLoading: Selectors.isRepliesLoading(state, props),
        currentUserId: Selectors.getCurrentUserId(state),
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)
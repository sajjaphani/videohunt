import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getComments, hasMoreComments, getNextPageUrl, isLoading, isComment } from './selectors'
import * as actions from './actions'
import CommentsList from '../../components/CommentsList'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        parentCommentId: props.parentCommentId,
        commentId: props.commentId,
        loggedIn: props.loggedIn,
        isReply: props.isReply,
        commentIds: getComments(state, props),
        hasMore: hasMoreComments(state, props),
        nextPageUrl: getNextPageUrl(state, props),
        isLoading: isLoading(state, props),
        isComment: isComment(state, props)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
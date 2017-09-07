import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getComments, hasMoreComments, getNextPageUrl } from './selectors'
import * as actions from './actions'
import CommentsList from '../../components/CommentsList'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        commentIds: getComments(state, ownProps),
        hasMore: hasMoreComments(state, ownProps),
        nextPageUrl: getNextPageUrl(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
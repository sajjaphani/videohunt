import React from 'react'
import { connect } from 'react-redux'

import LikeButton from '../../components/LikeButton'
import { togglePost } from './actions'
import { getUserId, isLiked, getLikesCount } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        likesCount: getLikesCount(state,ownProps),
        userId: getUserId(state),
        liked: isLiked(state, ownProps)
    }
}

export default connect(mapStateToProps, {
    togglePost
})(LikeButton)
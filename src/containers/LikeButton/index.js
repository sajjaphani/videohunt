import React from 'react'
import { connect } from 'react-redux'

import LikeButton from '../../components/LikeButton'
import { togglePost } from './actions'
import { getUserId, isLiked } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        likes: ownProps.likes,
        userId: getUserId(state),
        liked: isLiked(state, ownProps)
    }
}

export default connect(mapStateToProps, {
    togglePost
})(LikeButton)
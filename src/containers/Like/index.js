import React from 'react'
import { connect } from 'react-redux'

import LikeButton from '../../components/LikeButton'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        likes: ownProps.likes
    }
}

export default connect(mapStateToProps, {

})(LikeButton)
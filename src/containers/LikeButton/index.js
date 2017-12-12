import { connect } from 'react-redux'

import LikeButton from '../../components/LikeButton'
import { toggleLike } from './actions'
import { getUserId, isLiked, getLikesCount, isLoggedIn } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        likesCount: getLikesCount(state, ownProps),
        userId: getUserId(state),
        isLoggedIn:isLoggedIn(state),
        liked: isLiked(state, ownProps)
    }
}

export default connect(mapStateToProps, {
    toggleLike
})(LikeButton)
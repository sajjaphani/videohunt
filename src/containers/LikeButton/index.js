import { connect } from 'react-redux'

import LikeButton from '../../components/LikeButton'
import { toggleLike } from './actions'
import { isLiked, getLikesCount, getLoggedIn } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        likesCount: getLikesCount(state, props),
        isLoggedIn: getLoggedIn(state),
        liked: isLiked(state, props)
    }
}

export default connect(mapStateToProps, {
    toggleLike
})(LikeButton)
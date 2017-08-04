import React from 'react'
import { connect } from 'react-redux'

import Post from '../../components/Post'
import { getLikes, getComments } from './selectors'
import LikeButtonContainer from '../LikeButton'
import CommentButtonContainer from '../CommentButton'
import WatchListButton from '../../components/WatchListButton'
import ShareButton from '../../components/ShareButton'
import CommentsSectionContainer from '../CommentsSection'

class PostFooterContainer extends React.PureComponent {
    render() {
        const { likes, comments, postId } = this.props
        return (
            <div>
                <LikeButtonContainer postId={postId} likes={likes} />
                <CommentButtonContainer postId={postId} comments={comments} />
                <WatchListButton />
                <ShareButton />
                <CommentsSectionContainer postId={postId} comments={comments} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        visible: ownProps.visible,
        postId: ownProps.postId,
        likes: getLikes(state, ownProps),
        comments: getComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostFooterContainer)
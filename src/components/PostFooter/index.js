import React from 'react'

import Post from '../Post'
import LikeButtonContainer from '../../containers/LikeButton'
import CommentButtonContainer from '../../containers/CommentButton'
import WatchListButton from '../WatchListButton'
import ShareButton from '../ShareButton'
import CommentsSectionContainer from '../../containers/CommentsSection'

export default class PostFooter extends React.PureComponent {
    render() {
        const { likes, comments, postId } = this.props
        return (
            <Post.Footer>
                <LikeButtonContainer postId={postId} likes={likes} />
                <CommentButtonContainer postId={postId} comments={comments} />
                <WatchListButton />
                <ShareButton />
                <CommentsSectionContainer postId={postId} comments={comments} />
            </Post.Footer>
        )
    }
}
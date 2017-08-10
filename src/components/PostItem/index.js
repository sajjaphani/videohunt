import React from 'react'
import Post from '../Post'
import PostFooterContainer from '../../containers/PostFooter'
import CommentsSectionContainer from '../../containers/CommentsSection'

export default class PostItem extends React.PureComponent {
    render() {
        const { title, subtitle, url, postId, comments } = this.props
        return (
            <Post>
                <Post.Header title={title} subtitle={subtitle} />
                <Post.Video url={url} />
                <PostFooterContainer postId={postId} />
                <CommentsSectionContainer postId={postId} comments={comments} />
            </Post>
        )
    }
}

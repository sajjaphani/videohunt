import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../Post'
import PostFooterContainer from '../../containers/PostFooter'
import CommentsSectionContainer from '../../containers/CommentsSection'

export default class PostItem extends React.PureComponent {
    render() {
        const { title, subtitle, url, postId, comments, expandComments } = this.props
        const postPath = '/posts/' + postId
        return (
            <Post>
                <Link to={postPath}>
                    <Post.Header title={title} subtitle={subtitle} />
                </Link>
                <Post.Video url={url} />
                <PostFooterContainer postId={postId} />
                <CommentsSectionContainer
                    postId={postId}
                    comments={comments}
                    expandComments={expandComments} />
            </Post>
        )
    }
}

import React from 'react'
import { Link } from 'react-router-dom'

import Post from '../Post'
import CommentsSectionContainer from '../../containers/CommentsSection'
import LikeButtonContainer from '../../containers/LikeButton'
import CommentButtonContainer from '../../containers/CommentButton'
import WatchListButton from '../WatchListButton'
import ShareButton from '../ShareButton'

export default class PostItem extends React.PureComponent {
    render() {
        const { title, subtitle, url, postId, expandComments } = this.props
        const postPath = '/posts/' + postId
        return (
            <Post>
                <Link to={postPath}>
                    <Post.Header title={title} subtitle={subtitle} />
                </Link>
                <Post.Video url={url} />
                <Post.Footer>
                    <LikeButtonContainer postId={postId} />
                    <CommentButtonContainer postId={postId} />
                    <WatchListButton />
                    <ShareButton />
                </Post.Footer>
                <CommentsSectionContainer
                    postId={postId}
                    expandComments={expandComments} />
            </Post>
        )
    }
}

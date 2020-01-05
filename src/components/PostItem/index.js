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
        const { title, author, url, embed, category, provider, postId, expandComments } = this.props
        const postPath = '/posts/' + postId;

        let videoEmbed;
        if (embed) {
            videoEmbed = <Post.Embed embed={embed} />;
        } else {
            videoEmbed = <Post.Video url={url} />;
        }

        return (
            <Post>
                <Link to={postPath}>
                    <Post.Header title={title} author={author} category={category} provider={provider} />
                </Link>
                {/* TODO, we need to remove the Post.Video once we push only embed data */}
                {videoEmbed}
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

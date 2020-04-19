import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Post from '../Post'
import PostInfo from '../../containers/PostInfo'
import CommentsSectionContainer from '../../containers/CommentsSection'
import LikeButtonContainer from '../../containers/LikeButton'
import CommentButtonContainer from '../../containers/CommentButton'

import ErrorBoundary from '../ErrorBoundary';

// import WatchListButton from '../WatchListButton'
// import ShareButton from '../ShareButton'

export default class PostItem extends React.PureComponent {

    render() {
        const { title, author, url, embed, category, provider, postId, expandComments, userId, postedOn, description } = this.props;
        const postPath = '/posts/' + postId;

        let videoEmbed;
        if (embed) {
            videoEmbed = (
                <ErrorBoundary>
                    <Post.Embed embed={embed} postId={postId} />
                </ErrorBoundary>
            );
        } else {
            videoEmbed = <Post.Video url={url} />;
        }

        const styles = { borderTop: '1px solid #707070' };
        const gridStyle = { marginTop: '0em' };

        const _userId = userId || 'some-user-id';

        return (
            <Post>
                <PostInfo userId={_userId} imageUrl="/images/user.png" postedOn={postedOn} />
                <Link to={postPath} style={styles}>
                    <Post.Header className="post-link" title={title} author={author} category={category} provider={provider} description={description} />
                </Link>
                {/* TODO, we need to remove the Post.Video once we push only embed data */}
                {videoEmbed}
                <Post.Footer>
                    <Grid style={gridStyle}>
                        <Grid.Column floated='left' width={8}>
                            {/* <User showName={true} userId={_userId} imageUrl="/images/user.png" /> */}
                        </Grid.Column>
                        <Grid.Column floated='right' width={8}>
                            <Container textAlign='right'>
                                <LikeButtonContainer postId={postId} />
                                <CommentButtonContainer postId={postId} />
                                {/* <WatchListButton /> */}
                                {/* <ShareButton /> */}
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Post.Footer>
                <CommentsSectionContainer
                    postId={postId}
                    expandComments={expandComments} />
            </Post>
        )
    }
}

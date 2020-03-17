import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Post from '../Post'
import User from '../../containers/User'
import CommentsSectionContainer from '../../containers/CommentsSection'
import LikeButtonContainer from '../../containers/LikeButton'
import CommentButtonContainer from '../../containers/CommentButton'

// import WatchListButton from '../WatchListButton'
// import ShareButton from '../ShareButton'

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

        const styles = { borderTop: '1px solid #707070' };
        const gridStyle = { marginTop: '0em' };
        return (
            <Post>
                <Link to={postPath} style={styles}>
                    <Post.Header title={title} author={author} category={category} provider={provider} />
                </Link>
                {/* TODO, we need to remove the Post.Video once we push only embed data */}
                {videoEmbed}
                <Post.Footer>
                    <Grid style={gridStyle}>
                        <Grid.Column floated='left' width={8}>
                            <User showName={true} userId='some-user-id' imageUrl="/images/user.png" />
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

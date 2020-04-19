import React from 'react'
import { Container, Segment, Image, Grid } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

const borderStyle = { borderRadius: '4px' };

export default class CategoryFeed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    componentDidUpdate(prevProps, prevState) {
        const feed = this.props.feed;
        const prevFeed = prevProps.feed;
        if (feed !== prevFeed) {
            this.setState({ hasMore: true });
        }
    }

    loadPosts = () => {
        const { feed, initializing, nextPage } = this.props;
        if (initializing) {
            this.props.actions.loadVideos(feed);
        } else {
            if (nextPage) {
                this.props.actions.loadMoreVideos(feed, nextPage);
            } else {
                this.setState({ hasMore: false });
            }
        }
    }

    render() {
        const { postIds, feedName, feedImage } = this.props;
        const postList = computePostList(postIds, this.state.hasMore);

        return (
            <Container>
                <Segment style={borderStyle}>
                    <Grid columns={2}>
                        <Grid.Column width={6}>
                            <Image src={feedImage} size='medium' rounded />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div className="next-title">{feedName}</div>
                            <div className="next-auth">{feedName}</div>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <div style={borderStyle}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadPosts}
                        hasMore={this.state.hasMore}
                        loader={getLoader()}
                    >
                        {postList}
                    </InfiniteScroll>
                </div>
            </Container>
        )
    }
}

function computePostList(posts, hasMore) {
    if (posts && posts.length > 0) {
        return posts.map((postId) => (
            <Segment key={postId} style={borderStyle} className="post-item-bg">
                <PostContainer key={postId} postId={postId} />
            </Segment>
        ))
    } else {
        if (hasMore) {
            return <div />
        } else {
            return (
                <Segment style={borderStyle}>
                    <EmptyFeed />
                </Segment>

            )
        }
    }
}

function getLoader() {
    return (
        <Segment style={borderStyle} key={0}>
            <DummyPost key={0} />
        </Segment>
    )
}
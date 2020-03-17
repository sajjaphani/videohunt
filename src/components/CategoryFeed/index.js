import React from 'react'
import { Header, Container, Segment, Divider } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

import { getDisplayName } from '../../utils/feed'

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

        const FB = window.FB;
        if (FB) {
            FB.XFBML.parse();
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
        const { postIds, feed } = this.props;
        const postList = computePostList(postIds, this.state.hasMore);
        const borderStyle = { borderRadius: '4px' };

        return (
            <Container>
                <Segment style={borderStyle}>
                    <Header size='small' className="ui-background">{getDisplayName(feed)}</Header>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadPosts}
                        hasMore={this.state.hasMore}
                        loader={<DummyPost key={0} />}
                    >
                        {postList}
                    </InfiniteScroll>
                </Segment>
            </Container>
        )
    }
}

function computePostList(posts, hasMore) {
    if (posts && posts.length > 0)
        return posts.map((postId) =>
            <div key={postId}>
                <Divider />
                <PostContainer key={postId} postId={postId} />
            </div>
        )
    else {
        if (hasMore)
            return <div />
        else
            return (
                <div>
                    <Divider />
                    <EmptyFeed />
                </div>
            )
    }
}
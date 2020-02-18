import React from 'react'
import { Header } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

import getDisplayName from '../../utils/feed-to-name'

export default class CategoryFeed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('hello');
        const feed = this.props.feed;
        const prevFeed = prevProps.feed;
        if(feed !== prevFeed) {
            this.setState({ hasMore: true });
        }

        const FB = window.FB;
        FB.XFBML.parse();
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
        const { postIds, feed } = this.props
        const postList = computePostList(postIds)
        return (
            <div>
                <Header as='h2' attached='top' color='grey'>{getDisplayName(feed)}</Header>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={<DummyPost key={0} />}
                >
                    {postList}
                </InfiniteScroll>
            </div>
        )
    }
}

function computePostList(posts) {
    if (posts && posts.length > 0)
        return posts.map((postId) => <PostContainer key={postId} postId={postId} />)
    else
        return (<EmptyFeed />)
}
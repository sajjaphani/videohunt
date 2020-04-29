import React from 'react'
import { Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

import FeedPostsContainer from '../../containers/FeedWrapper';
import DummyPost from '../DummyPost';
import EmptyFeed from '../EmptyFeed';

export default class Feed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    loadPosts = () => {
        const { topicId } = this.props;
        if (!this.props.hasFeed) {
            this.props.actions.loadVideos(topicId);
        } else {
            if (this.props.nextPage) {
                this.props.actions.loadMoreVideos(topicId, this.props.nextPage)
            } else {
                this.setState({ hasMore: false })
            }
        }
    }

    render() {
        const feedList = this.computeFeedList(this.state.hasMore);

        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={this.getLoader()}
                >
                    {feedList}
                </InfiniteScroll>
            </div>
        )
    }

    computeFeedList = (hasMore) => {
        const { hasFeed, topicId } = this.props;
        if (hasFeed) {
            return <FeedPostsContainer topicId={topicId} />
        } else {
            if (hasMore)
                return <div />
            else
                return <EmptyFeed />
        }
    }

    getLoader = () => {
        const borderStyle = { borderRadius: '4px', marginTop: 0 };

        return (
            <Segment style={borderStyle} key={0}>
                <DummyPost />
            </Segment>
        )
    }
}
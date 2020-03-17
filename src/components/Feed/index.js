import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import DayFeedContainer from '../../containers/DayFeed'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';
import { Segment } from 'semantic-ui-react';

export default class Feed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    loadPosts = () => {
        const { category } = this.props;
        if (this.props.feed.length === 0) {
            this.props.actions.loadVideos(category);
        } else {
            if (this.props.nextPage) {
                this.props.actions.loadMoreVideos(category, this.props.nextPage)
            } else {
                this.setState({ hasMore: false })
            }
        }
    }

    componentDidUpdate() {
        const FB = window.FB;
        if (FB) {
            FB.XFBML.parse();
        }
    }

    render() {
        const dayFeedList = this.computeDayFeedList(this.state.hasMore)
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={this.getLoader()}
                >
                    {dayFeedList}
                </InfiniteScroll>
            </div>
        )
    }

    computeDayFeedList = (hasMore) => {
        const { feed, category } = this.props;
        if (feed && feed.length > 0) {
            return feed.map((feedDate) => <DayFeedContainer key={feedDate} date={feedDate} category={category} />)
        } else {
            if (hasMore)
                return <div />
            else
                return (<EmptyFeed />)
        }
    }

    getLoader = () => {
        const borderStyle = { borderRadius: '4px' };

        return (
            <Segment style={borderStyle} key={0}>
                <DummyPost />
            </Segment>
        )
    }
}
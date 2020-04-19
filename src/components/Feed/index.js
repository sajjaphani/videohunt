import React from 'react'
import { Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

import DayFeedContainer from '../../containers/DayFeed'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

export default class Feed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true, hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
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

    render() {
        const dayFeedList = this.computeDayFeedList(this.state.hasMore);
        
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
        const borderStyle = { borderRadius: '4px', marginTop: 0 };

        return (
            <Segment style={borderStyle} key={0}>
                <DummyPost />
            </Segment>
        )
    }
}
import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import DayFeedContainer from '../../containers/DayFeed'
import DummyPost from '../DummyPost'

export default class Feed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    loadPosts = () => {
        if (this.props.feed.length == 0) {
            this.props.actions.loadVideos();
        } else {
            if (this.props.nextPage) {
                this.props.actions.loadMoreVideos(this.props.nextPage)
            } else {
                this.setState({ hasMore: false })
            }
        }
    }

    render() {
        const dayFeedList = computeDayFeedList(this.props.feed)
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={<DummyPost />}
                >
                    {dayFeedList}
                </InfiniteScroll>
            </div>
        )
    }
}

function computeDayFeedList(feed) {
    if (feed)
        return feed.map((feedDate) => <DayFeedContainer key={feedDate} date={feedDate} />)
    else
        return (<div />)
}
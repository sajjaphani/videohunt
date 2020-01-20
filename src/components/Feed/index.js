import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';

import DayFeedContainer from '../../containers/DayFeed'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

export default class Feed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    loadPosts = () => {
        const { category } = this.props;
        if (this.props.feed.length === 0) {
            this.setState({ hasMore: false })
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

    }

    render() {
        const dayFeedList = this.computeDayFeedList()
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={<DummyPost key={0}/>}
                >
                    {dayFeedList}
                </InfiniteScroll>
            </div>
        )
    }

    computeDayFeedList = () => {
        const { feed, category } = this.props;
        if (feed && feed.length > 0) {
            return feed.map((feedDate) => <DayFeedContainer key={feedDate} date={feedDate} category={category} />)
        } else
            return (<EmptyFeed key="empty-feed" />)
    }
}
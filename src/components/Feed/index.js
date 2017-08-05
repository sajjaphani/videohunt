import React from 'react'
import DayFeedContainer from '../../containers/DayFeed'

export default class FeedContainer extends React.PureComponent {
    componentWillMount() {
        // TODO: refactor to add isLoaded state
        if (this.props.feed.length == 0) {
            this.props.actions.loadVideos();
        }
    }
    render() {
        const dayFeedList = computeDayFeedList(this.props.feed)
        return (
            <div>
                {dayFeedList}
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
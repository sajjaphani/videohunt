import React from 'react'

import DayFeedContainer from '../../containers/DayFeed'
import LoadFeedContainer from '../../containers/LoadFeed'
import DummyPost from '../DummyPost'

export default class Feed extends React.PureComponent {
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
                 <LoadFeedContainer /> 
                 {/* <DummyPost />    */}
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
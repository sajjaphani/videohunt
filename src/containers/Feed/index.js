import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DayFeedContainer from '../DayFeed'
import * as actions from './actions'
import { getFeed } from './selector'

class FeedContainer extends React.PureComponent {

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

function mapStateToProps(state) {
    return {
        feed: getFeed(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
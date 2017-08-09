import React from 'react'
import DayFeedContainer from '../../containers/DayFeed'
import VisibilitySensor from 'react-visibility-sensor'

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
                <VisibilitySensor
                    scrollCheck
                    scrollThrottle={100}
                    intervalDelay={8000}
                    containment={this}
                    onChange={this.onChange}
                    minTopValue={10}
                    partialVisibility={true}
                    offset={this.props.offset}>
                    <div className='sensor' />
                </VisibilitySensor>
            </div>
        )
    }

    onChange = (isVisible) => {
        console.log('Visible: ' + isVisible)
    }
}

function computeDayFeedList(feed) {
    if (feed)
        return feed.map((feedDate) => <DayFeedContainer key={feedDate} date={feedDate} />)
    else
        return (<div />)
}
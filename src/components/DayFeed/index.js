import React from 'react'
import { Segment } from 'semantic-ui-react'
import DayFeedItem from './DayFeedItem'

const DayFeed = props => {
    return (
        <Segment.Group>
            <DayFeedItem date={props.date} />
        </Segment.Group>
    )
}

export default DayFeed
import React from 'react'
import { Segment } from 'semantic-ui-react'
import DayFeedItem from './DayFeedItem'

const DayFeed = props => {
    return (
        <Segment.Group>
            <DayFeedItem dayItem={props.dayItem}/>
        </Segment.Group>
    )
}

export default DayFeed
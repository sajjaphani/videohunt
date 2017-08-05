import React from 'react'
import { Segment } from 'semantic-ui-react'
import DayFeedHeader from './DayFeedHeader'

const DayFeed = props => {
    const { children } = props
    return (
        <Segment.Group>
            <DayFeedHeader date={props.date} />
            {children}
        </Segment.Group>
    )
}

export default DayFeed
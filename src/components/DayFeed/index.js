import React from 'react'
import { Segment } from 'semantic-ui-react'
import Header from './Header'

const DayFeed = props => {
    const { children } = props
    return (
        <Segment.Group>
            <Header date={props.date} />
            {children}
        </Segment.Group>
    )
}

DayFeed.Header = Header

export default DayFeed
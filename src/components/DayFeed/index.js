import React from 'react'
import { Segment } from 'semantic-ui-react'
import PostsListContainer from '../../containers/PostsList'
import DayFeedHeader from './DayFeedHeader'

const DayFeed = props => {
    return (
        <Segment.Group>
            <DayFeedHeader date={props.date} />
            <PostsListContainer feedDate={props.date} />
        </Segment.Group>
    )
}

export default DayFeed
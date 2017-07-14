import React from 'react'
import PostsListContainer from '../../containers/PostsList'
import DayFeedHeader from './DayFeedHeader'

const DayFeedItem = props => {
    const { date } = props
    return (
        <div>
            <DayFeedHeader date={props.date} />
            <PostsListContainer feedDate={props.date} />
        </div>
    )
}

export default DayFeedItem
import React from 'react'
import PostsList from './PostsList'
import DayFeedHeader from './DayFeedHeader'

const DayFeedItem = props => {
    return (
        <div>
            <DayFeedHeader date={props.dayItem.date} dateAnnotation={props.dayItem.dateAnnotation} />
            <PostsList posts={props.dayItem.posts} />
        </div>
    )
}

export default DayFeedItem
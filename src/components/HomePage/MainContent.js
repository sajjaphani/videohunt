import React from 'react'
import DayFeed from '../DayFeed'

const MainContent = props => {
    if (props.videos) {
        const daysFeed = props.videos.map((dayItem) => {
            return (
                <DayFeed key={dayItem.date} dayItem={dayItem} />
            )
        })
        return (
            <div>
                {daysFeed}
            </div>
        );
    } else {
        return (<div></div>)
    }
}

export default MainContent
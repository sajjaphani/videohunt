import React from 'react'
import DayFeed from '../DayFeed'

const Feed = props => {
    const { feed } = props
    if (feed) {
        const daysFeed = feed.map((feedDate) => <DayFeed key={feedDate} date={feedDate}/>)
        return (
            <div>
                {daysFeed}
            </div>
        );
    } else {
        return (<div></div>)
    }
}

export default Feed
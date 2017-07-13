import React from 'react'
import DayFeed from '../DayFeed'

const Feed = props => {
    console.log('state here',props)
    if (props.posts) {
        const daysFeed = props.posts.map((dayItem) => {
            console.log('day item',dayItem)
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

export default Feed
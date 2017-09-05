import React from 'react'

import FeedContainer from '../../containers/Feed'
import CategoryFeedContainer from '../../containers/CategoryFeed'

const FeedWrapper = (props) => {
    const { language, feed } = props
    return feed == 'All'? <FeedContainer/> : <CategoryFeedContainer feed={props.feed}/>
}

export default FeedWrapper
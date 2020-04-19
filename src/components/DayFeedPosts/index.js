import React from 'react'
import { Segment } from 'semantic-ui-react'

import DayFeed from '../DayFeed'
import PostContainer from '../../containers/Post'

const borderStyle = { borderRadius: '4px' };

export default class DayFeedPosts extends React.PureComponent {
    render() {
        const { date, postIds } = this.props
        const postsList = computePostsList(postIds)
        return (
            <DayFeed date={date}>
                {postsList}
            </DayFeed>
        )
    }
}

const computePostsList = (postIds) => {
    const postItems = postIds.map((postId) => {
        return (
            <Segment key={postId} style={borderStyle} className="post-item-bg">
                <PostContainer key={postId} postId={postId} />
            </Segment>
        )
    });

    return postItems;
}

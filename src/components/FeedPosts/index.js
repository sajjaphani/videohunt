import React from 'react'
import { Segment } from 'semantic-ui-react'

import FeedWrapper from '../FeedWrapper'
import PostContainer from '../../containers/Post'

const borderStyle = { borderRadius: '4px', padding: '1em .5em' };

export default class FeedPosts extends React.PureComponent {
    render() {
        const { date, postIds } = this.props
        const postsList = computePostsList(postIds)
        return (
            <FeedWrapper date={date}>
                {postsList}
            </FeedWrapper>
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

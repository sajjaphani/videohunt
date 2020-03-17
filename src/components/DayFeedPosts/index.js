import React from 'react'
import { Divider } from 'semantic-ui-react'

import DayFeed from '../DayFeed'
import PostContainer from '../../containers/Post'

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
            <div key={postId}>
                <Divider />
                <PostContainer key={postId} postId={postId} />
            </div>
        )
    });

    return postItems;
}

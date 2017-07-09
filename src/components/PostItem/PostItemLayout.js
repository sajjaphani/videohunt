import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import PostItemHeader from './PostItemHeader'
import VideoComponentEmbed from './VideoComponentEmbed'
import PostItemFooter from './PostItemFooter'

const PostItemLayout = props => (
    <Segment attached>
        <Link to={'/posts/' + props.post.postId}>
            <PostItemHeader title={props.post.title} subtitle={props.post.subtitle} />
        </Link>
        <Divider />
        <VideoComponentEmbed url={props.post.url} />
        <Divider />
        <PostItemFooter likes={props.post.likes} comments={props.post.comments} />
    </Segment>
)

export default PostItemLayout